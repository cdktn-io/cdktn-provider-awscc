# `dataAwsccEmrserverlessApplication` Submodule <a name="`dataAwsccEmrserverlessApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEmrserverlessApplication <a name="DataAwsccEmrserverlessApplication" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application awscc_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplication(scope Construct, id *string, config DataAwsccEmrserverlessApplicationConfig) DataAwsccEmrserverlessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig">DataAwsccEmrserverlessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig">DataAwsccEmrserverlessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEmrserverlessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration">AutoStartConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration">AutoStopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity">InitialCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity">MaximumCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel">ReleaseLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications">WorkerTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoStartConfiguration`<sup>Required</sup> <a name="AutoStartConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration"></a>

```go
func AutoStartConfiguration() DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `AutoStopConfiguration`<sup>Required</sup> <a name="AutoStopConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration"></a>

```go
func AutoStopConfiguration() DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration"></a>

```go
func ImageConfiguration() DataAwsccEmrserverlessApplicationImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `InitialCapacity`<sup>Required</sup> <a name="InitialCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity"></a>

```go
func InitialCapacity() DataAwsccEmrserverlessApplicationInitialCapacityList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a>

---

##### `MaximumCapacity`<sup>Required</sup> <a name="MaximumCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity"></a>

```go
func MaximumCapacity() DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel"></a>

```go
func ReleaseLabel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags"></a>

```go
func Tags() DataAwsccEmrserverlessApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WorkerTypeSpecifications`<sup>Required</sup> <a name="WorkerTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications"></a>

```go
func WorkerTypeSpecifications() DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStartConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration {

}
```


### DataAwsccEmrserverlessApplicationAutoStopConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStopConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration {

}
```


### DataAwsccEmrserverlessApplicationConfig <a name="DataAwsccEmrserverlessApplicationConfig" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application#id DataAwsccEmrserverlessApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEmrserverlessApplicationImageConfiguration <a name="DataAwsccEmrserverlessApplicationImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationImageConfiguration {

}
```


### DataAwsccEmrserverlessApplicationInitialCapacity <a name="DataAwsccEmrserverlessApplicationInitialCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationInitialCapacity {

}
```


### DataAwsccEmrserverlessApplicationInitialCapacityValue <a name="DataAwsccEmrserverlessApplicationInitialCapacityValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationInitialCapacityValue {

}
```


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration {

}
```


### DataAwsccEmrserverlessApplicationMaximumCapacity <a name="DataAwsccEmrserverlessApplicationMaximumCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationMaximumCapacity {

}
```


### DataAwsccEmrserverlessApplicationNetworkConfiguration <a name="DataAwsccEmrserverlessApplicationNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationNetworkConfiguration {

}
```


### DataAwsccEmrserverlessApplicationTags <a name="DataAwsccEmrserverlessApplicationTags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationTags {

}
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecifications <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications {

}
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

&dataawsccemrserverlessapplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationAutoStartConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a>

---


### DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">IdleTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdleTimeoutMinutes`<sup>Required</sup> <a name="IdleTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```go
func IdleTimeoutMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationAutoStopConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a>

---


### DataAwsccEmrserverlessApplicationImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationImageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationImageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityList <a name="DataAwsccEmrserverlessApplicationInitialCapacityList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationInitialCapacityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEmrserverlessApplicationInitialCapacityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get"></a>

```go
func Get(index *f64) DataAwsccEmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEmrserverlessApplicationInitialCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationInitialCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEmrserverlessApplicationInitialCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value"></a>

```go
func Value() DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationInitialCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration"></a>

```go
func WorkerConfiguration() DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a>

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationInitialCapacityValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---


### DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationMaximumCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk">Disk</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```go
func Disk() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationMaximumCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a>

---


### DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a>

---


### DataAwsccEmrserverlessApplicationTagsList <a name="DataAwsccEmrserverlessApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEmrserverlessApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEmrserverlessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEmrserverlessApplicationTagsOutputReference <a name="DataAwsccEmrserverlessApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEmrserverlessApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get"></a>

```go
func Get(key *string) DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccemrserverlessapplication"

dataawsccemrserverlessapplication.NewDataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration">ImageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageConfiguration`<sup>Required</sup> <a name="ImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration"></a>

```go
func ImageConfiguration() DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEmrserverlessApplicationWorkerTypeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a>

---



