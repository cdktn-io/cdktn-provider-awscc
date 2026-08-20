# `dataAwsccResiliencehubv2Service` Submodule <a name="`dataAwsccResiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubv2Service <a name="DataAwsccResiliencehubv2Service" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2Service(scope Construct, id *string, config DataAwsccResiliencehubv2ServiceConfig) DataAwsccResiliencehubv2Service
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig">DataAwsccResiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig">DataAwsccResiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.DataAwsccResiliencehubv2Service_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.DataAwsccResiliencehubv2Service_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.DataAwsccResiliencehubv2Service_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.DataAwsccResiliencehubv2Service_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccResiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccResiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccResiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.assertions">Assertions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList">DataAwsccResiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.associatedSystems">AssociatedSystems</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList">DataAwsccResiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.effectivePolicyValues">EffectivePolicyValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.inputSources">InputSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList">DataAwsccResiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference">DataAwsccResiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.reportConfiguration">ReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList">DataAwsccResiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Assertions`<sup>Required</sup> <a name="Assertions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.assertions"></a>

```go
func Assertions() DataAwsccResiliencehubv2ServiceAssertionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList">DataAwsccResiliencehubv2ServiceAssertionsList</a>

---

##### `AssociatedSystems`<sup>Required</sup> <a name="AssociatedSystems" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.associatedSystems"></a>

```go
func AssociatedSystems() DataAwsccResiliencehubv2ServiceAssociatedSystemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList">DataAwsccResiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DependencyDiscovery`<sup>Required</sup> <a name="DependencyDiscovery" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.dependencyDiscovery"></a>

```go
func DependencyDiscovery() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectivePolicyValues`<sup>Required</sup> <a name="EffectivePolicyValues" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.effectivePolicyValues"></a>

```go
func EffectivePolicyValues() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `InputSources`<sup>Required</sup> <a name="InputSources" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.inputSources"></a>

```go
func InputSources() DataAwsccResiliencehubv2ServiceInputSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList">DataAwsccResiliencehubv2ServiceInputSourcesList</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.permissionModel"></a>

```go
func PermissionModel() DataAwsccResiliencehubv2ServicePermissionModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference">DataAwsccResiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `ReportConfiguration`<sup>Required</sup> <a name="ReportConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.reportConfiguration"></a>

```go
func ReportConfiguration() DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tags"></a>

```go
func Tags() DataAwsccResiliencehubv2ServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList">DataAwsccResiliencehubv2ServiceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2Service.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubv2ServiceAssertions <a name="DataAwsccResiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceAssertions {

}
```


### DataAwsccResiliencehubv2ServiceAssociatedSystems <a name="DataAwsccResiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceAssociatedSystems {

}
```


### DataAwsccResiliencehubv2ServiceConfig <a name="DataAwsccResiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/resiliencehubv2_service#id DataAwsccResiliencehubv2Service#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubv2ServiceEffectivePolicyValues <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo {

}
```


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto {

}
```


### DataAwsccResiliencehubv2ServiceInputSources <a name="DataAwsccResiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceInputSources {

}
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration {

}
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks {

}
```


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags {

}
```


### DataAwsccResiliencehubv2ServicePermissionModel <a name="DataAwsccResiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServicePermissionModel {

}
```


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns {

}
```


### DataAwsccResiliencehubv2ServiceReportConfiguration <a name="DataAwsccResiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceReportConfiguration {

}
```


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput {

}
```


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3 {

}
```


### DataAwsccResiliencehubv2ServiceTags <a name="DataAwsccResiliencehubv2ServiceTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

&dataawsccresiliencehubv2service.DataAwsccResiliencehubv2ServiceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubv2ServiceAssertionsList <a name="DataAwsccResiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceAssertionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceAssertionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceAssertionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceAssertionsOutputReference <a name="DataAwsccResiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceAssertionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceAssertionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions">DataAwsccResiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceAssertions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssertions">DataAwsccResiliencehubv2ServiceAssertions</a>

---


### DataAwsccResiliencehubv2ServiceAssociatedSystemsList <a name="DataAwsccResiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceAssociatedSystemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceAssociatedSystemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference <a name="DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">SystemArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">UserJourneyIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems">DataAwsccResiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SystemArn`<sup>Required</sup> <a name="SystemArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```go
func SystemArn() *string
```

- *Type:* *string

---

##### `UserJourneyIds`<sup>Required</sup> <a name="UserJourneyIds" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```go
func UserJourneyIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceAssociatedSystems
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceAssociatedSystems">DataAwsccResiliencehubv2ServiceAssociatedSystems</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">MultiAzDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">MultiAzRpo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">MultiAzRto</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">MultiRegionDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">MultiRegionRpo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">MultiRegionRto</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues">DataAwsccResiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilitySlo`<sup>Required</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```go
func AvailabilitySlo() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `MultiAzDrApproach`<sup>Required</sup> <a name="MultiAzDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```go
func MultiAzDrApproach() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `MultiAzRpo`<sup>Required</sup> <a name="MultiAzRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```go
func MultiAzRpo() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `MultiAzRto`<sup>Required</sup> <a name="MultiAzRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```go
func MultiAzRto() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `MultiRegionDrApproach`<sup>Required</sup> <a name="MultiRegionDrApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```go
func MultiRegionDrApproach() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `MultiRegionRpo`<sup>Required</sup> <a name="MultiRegionRpo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```go
func MultiRegionRpo() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `MultiRegionRto`<sup>Required</sup> <a name="MultiRegionRto" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```go
func MultiRegionRto() DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">DataAwsccResiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceEffectivePolicyValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceEffectivePolicyValues">DataAwsccResiliencehubv2ServiceEffectivePolicyValues</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesList <a name="DataAwsccResiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceInputSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceInputSourcesOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceInputSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources">DataAwsccResiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfiguration`<sup>Required</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```go
func ResourceConfiguration() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceInputSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSources">DataAwsccResiliencehubv2ServiceInputSources</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">CfnStackArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">DesignFileS3Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">TfStateFileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CfnStackArn`<sup>Required</sup> <a name="CfnStackArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```go
func CfnStackArn() *string
```

- *Type:* *string

---

##### `DesignFileS3Url`<sup>Required</sup> <a name="DesignFileS3Url" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```go
func DesignFileS3Url() *string
```

- *Type:* *string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```go
func Eks() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```go
func ResourceTags() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `TfStateFileUrl`<sup>Required</sup> <a name="TfStateFileUrl" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```go
func TfStateFileUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">DataAwsccResiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```go
func CrossAccountRoleArn() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### DataAwsccResiliencehubv2ServicePermissionModelOutputReference <a name="DataAwsccResiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServicePermissionModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServicePermissionModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel">DataAwsccResiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArns`<sup>Required</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```go
func CrossAccountRoleArns() DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">DataAwsccResiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```go
func InvokerRoleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServicePermissionModel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServicePermissionModel">DataAwsccResiliencehubv2ServicePermissionModel</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceReportConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">ReportOutput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration">DataAwsccResiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReportOutput`<sup>Required</sup> <a name="ReportOutput" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```go
func ReportOutput() DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceReportConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfiguration">DataAwsccResiliencehubv2ServiceReportConfiguration</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```go
func S3() DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">BucketPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `BucketPath`<sup>Required</sup> <a name="BucketPath" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```go
func BucketPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3">DataAwsccResiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### DataAwsccResiliencehubv2ServiceTagsList <a name="DataAwsccResiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccResiliencehubv2ServiceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccResiliencehubv2ServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccResiliencehubv2ServiceTagsOutputReference <a name="DataAwsccResiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccresiliencehubv2service"

dataawsccresiliencehubv2service.NewDataAwsccResiliencehubv2ServiceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccResiliencehubv2ServiceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags">DataAwsccResiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccResiliencehubv2ServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Service.DataAwsccResiliencehubv2ServiceTags">DataAwsccResiliencehubv2ServiceTags</a>

---



