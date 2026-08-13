# `dataAwsccKinesisanalyticsv2Application` Submodule <a name="`dataAwsccKinesisanalyticsv2Application` Submodule" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKinesisanalyticsv2Application <a name="DataAwsccKinesisanalyticsv2Application" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2Application(scope Construct, id *string, config DataAwsccKinesisanalyticsv2ApplicationConfig) DataAwsccKinesisanalyticsv2Application
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig">DataAwsccKinesisanalyticsv2ApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig">DataAwsccKinesisanalyticsv2ApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2Application_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2Application_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2Application_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2Application_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccKinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccKinesisanalyticsv2Application to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccKinesisanalyticsv2Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKinesisanalyticsv2Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationDescription">ApplicationDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMaintenanceConfiguration">ApplicationMaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMode">ApplicationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runConfiguration">RunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runtimeEnvironment">RuntimeEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.serviceExecutionRole">ServiceExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList">DataAwsccKinesisanalyticsv2ApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationConfiguration`<sup>Required</sup> <a name="ApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationConfiguration"></a>

```go
func ApplicationConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a>

---

##### `ApplicationDescription`<sup>Required</sup> <a name="ApplicationDescription" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationDescription"></a>

```go
func ApplicationDescription() *string
```

- *Type:* *string

---

##### `ApplicationMaintenanceConfiguration`<sup>Required</sup> <a name="ApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMaintenanceConfiguration"></a>

```go
func ApplicationMaintenanceConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a>

---

##### `ApplicationMode`<sup>Required</sup> <a name="ApplicationMode" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationMode"></a>

```go
func ApplicationMode() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `RunConfiguration`<sup>Required</sup> <a name="RunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runConfiguration"></a>

```go
func RunConfiguration() DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference</a>

---

##### `RuntimeEnvironment`<sup>Required</sup> <a name="RuntimeEnvironment" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.runtimeEnvironment"></a>

```go
func RuntimeEnvironment() *string
```

- *Type:* *string

---

##### `ServiceExecutionRole`<sup>Required</sup> <a name="ServiceExecutionRole" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.serviceExecutionRole"></a>

```go
func ServiceExecutionRole() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tags"></a>

```go
func Tags() DataAwsccKinesisanalyticsv2ApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList">DataAwsccKinesisanalyticsv2ApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2Application.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationConfig <a name="DataAwsccKinesisanalyticsv2ApplicationConfig" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/kinesisanalyticsv2_application#id DataAwsccKinesisanalyticsv2Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKinesisanalyticsv2ApplicationRunConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration {

}
```


### DataAwsccKinesisanalyticsv2ApplicationTags <a name="DataAwsccKinesisanalyticsv2ApplicationTags" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

&dataawscckinesisanalyticsv2application.DataAwsccKinesisanalyticsv2ApplicationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent">TextContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent">ZipFileContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation"></a>

```go
func S3ContentLocation() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a>

---

##### `TextContent`<sup>Required</sup> <a name="TextContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent"></a>

```go
func TextContent() *string
```

- *Type:* *string

---

##### `ZipFileContent`<sup>Required</sup> <a name="ZipFileContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent"></a>

```go
func ZipFileContent() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey">FileKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey"></a>

```go
func FileKey() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent">CodeContent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType">CodeContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeContent`<sup>Required</sup> <a name="CodeContent" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent"></a>

```go
func CodeContent() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a>

---

##### `CodeContentType`<sup>Required</sup> <a name="CodeContentType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType"></a>

```go
func CodeContentType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled">SnapshotsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnapshotsEnabled`<sup>Required</sup> <a name="SnapshotsEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled"></a>

```go
func SnapshotsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled">RollbackEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RollbackEnabled`<sup>Required</sup> <a name="RollbackEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled"></a>

```go
func RollbackEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups">PropertyGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyGroups`<sup>Required</sup> <a name="PropertyGroups" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups"></a>

```go
func PropertyGroups() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId">PropertyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap">PropertyMap</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropertyGroupId`<sup>Required</sup> <a name="PropertyGroupId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId"></a>

```go
func PropertyGroupId() *string
```

- *Type:* *string

---

##### `PropertyMap`<sup>Required</sup> <a name="PropertyMap" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap"></a>

```go
func PropertyMap() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled">CheckpointingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval">CheckpointInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints">MinPauseBetweenCheckpoints</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckpointingEnabled`<sup>Required</sup> <a name="CheckpointingEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled"></a>

```go
func CheckpointingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CheckpointInterval`<sup>Required</sup> <a name="CheckpointInterval" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval"></a>

```go
func CheckpointInterval() *f64
```

- *Type:* *f64

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType"></a>

```go
func ConfigurationType() *string
```

- *Type:* *string

---

##### `MinPauseBetweenCheckpoints`<sup>Required</sup> <a name="MinPauseBetweenCheckpoints" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints"></a>

```go
func MinPauseBetweenCheckpoints() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel">MetricsLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType"></a>

```go
func ConfigurationType() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `MetricsLevel`<sup>Required</sup> <a name="MetricsLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel"></a>

```go
func MetricsLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration">CheckpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration">ParallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CheckpointConfiguration`<sup>Required</sup> <a name="CheckpointConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration"></a>

```go
func CheckpointConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `ParallelismConfiguration`<sup>Required</sup> <a name="ParallelismConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration"></a>

```go
func ParallelismConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType">ConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism">Parallelism</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu">ParallelismPerKpu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ConfigurationType`<sup>Required</sup> <a name="ConfigurationType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType"></a>

```go
func ConfigurationType() *string
```

- *Type:* *string

---

##### `Parallelism`<sup>Required</sup> <a name="Parallelism" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism"></a>

```go
func Parallelism() *f64
```

- *Type:* *f64

---

##### `ParallelismPerKpu`<sup>Required</sup> <a name="ParallelismPerKpu" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu"></a>

```go
func ParallelismPerKpu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration">ApplicationCodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration">ApplicationEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration">ApplicationSnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration">ApplicationSystemRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties">EnvironmentProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration">FlinkApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.sqlApplicationConfiguration">SqlApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations">VpcConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration">ZeppelinApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationCodeConfiguration`<sup>Required</sup> <a name="ApplicationCodeConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration"></a>

```go
func ApplicationCodeConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a>

---

##### `ApplicationEncryptionConfiguration`<sup>Required</sup> <a name="ApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration"></a>

```go
func ApplicationEncryptionConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a>

---

##### `ApplicationSnapshotConfiguration`<sup>Required</sup> <a name="ApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration"></a>

```go
func ApplicationSnapshotConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a>

---

##### `ApplicationSystemRollbackConfiguration`<sup>Required</sup> <a name="ApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration"></a>

```go
func ApplicationSystemRollbackConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a>

---

##### `EnvironmentProperties`<sup>Required</sup> <a name="EnvironmentProperties" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties"></a>

```go
func EnvironmentProperties() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a>

---

##### `FlinkApplicationConfiguration`<sup>Required</sup> <a name="FlinkApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration"></a>

```go
func FlinkApplicationConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a>

---

##### `SqlApplicationConfiguration`<sup>Required</sup> <a name="SqlApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.sqlApplicationConfiguration"></a>

```go
func SqlApplicationConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference</a>

---

##### `VpcConfigurations`<sup>Required</sup> <a name="VpcConfigurations" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations"></a>

```go
func VpcConfigurations() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a>

---

##### `ZeppelinApplicationConfiguration`<sup>Required</sup> <a name="ZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration"></a>

```go
func ZeppelinApplicationConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelism</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessor</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.inputLambdaProcessor">InputLambdaProcessor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputLambdaProcessor`<sup>Required</sup> <a name="InputLambdaProcessor" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.inputLambdaProcessor"></a>

```go
func InputLambdaProcessor() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationInputLambdaProcessorOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordColumns">RecordColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordEncoding">RecordEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordFormat">RecordFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordColumns`<sup>Required</sup> <a name="RecordColumns" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordColumns"></a>

```go
func RecordColumns() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList</a>

---

##### `RecordEncoding`<sup>Required</sup> <a name="RecordEncoding" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordEncoding"></a>

```go
func RecordEncoding() *string
```

- *Type:* *string

---

##### `RecordFormat`<sup>Required</sup> <a name="RecordFormat" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.recordFormat"></a>

```go
func RecordFormat() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchema</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.mapping">Mapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.sqlType">SqlType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.mapping"></a>

```go
func Mapping() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.sqlType"></a>

```go
func SqlType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordColumns</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.recordColumnDelimiter">RecordColumnDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.recordRowDelimiter">RecordRowDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordColumnDelimiter`<sup>Required</sup> <a name="RecordColumnDelimiter" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.recordColumnDelimiter"></a>

```go
func RecordColumnDelimiter() *string
```

- *Type:* *string

---

##### `RecordRowDelimiter`<sup>Required</sup> <a name="RecordRowDelimiter" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.recordRowDelimiter"></a>

```go
func RecordRowDelimiter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParameters</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.recordRowPath">RecordRowPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordRowPath`<sup>Required</sup> <a name="RecordRowPath" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.recordRowPath"></a>

```go
func RecordRowPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParameters</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.csvMappingParameters">CsvMappingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.jsonMappingParameters">JsonMappingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvMappingParameters`<sup>Required</sup> <a name="CsvMappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.csvMappingParameters"></a>

```go
func CsvMappingParameters() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersCsvMappingParametersOutputReference</a>

---

##### `JsonMappingParameters`<sup>Required</sup> <a name="JsonMappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.jsonMappingParameters"></a>

```go
func JsonMappingParameters() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersJsonMappingParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParameters</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.mappingParameters">MappingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.recordFormatType">RecordFormatType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MappingParameters`<sup>Required</sup> <a name="MappingParameters" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.mappingParameters"></a>

```go
func MappingParameters() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatMappingParametersOutputReference</a>

---

##### `RecordFormatType`<sup>Required</sup> <a name="RecordFormatType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.recordFormatType"></a>

```go
func RecordFormatType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaRecordFormat</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInput</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInput</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputParallelism">InputParallelism</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputProcessingConfiguration">InputProcessingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputSchema">InputSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.kinesisFirehoseInput">KinesisFirehoseInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.kinesisStreamsInput">KinesisStreamsInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputParallelism`<sup>Required</sup> <a name="InputParallelism" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputParallelism"></a>

```go
func InputParallelism() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputParallelismOutputReference</a>

---

##### `InputProcessingConfiguration`<sup>Required</sup> <a name="InputProcessingConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputProcessingConfiguration"></a>

```go
func InputProcessingConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputProcessingConfigurationOutputReference</a>

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.inputSchema"></a>

```go
func InputSchema() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsInputSchemaOutputReference</a>

---

##### `KinesisFirehoseInput`<sup>Required</sup> <a name="KinesisFirehoseInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.kinesisFirehoseInput"></a>

```go
func KinesisFirehoseInput() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisFirehoseInputOutputReference</a>

---

##### `KinesisStreamsInput`<sup>Required</sup> <a name="KinesisStreamsInput" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.kinesisStreamsInput"></a>

```go
func KinesisStreamsInput() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsKinesisStreamsInputOutputReference</a>

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputs</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.inputs"></a>

```go
func Inputs() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn"></a>

```go
func DatabaseArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration">GlueDataCatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueDataCatalogConfiguration`<sup>Required</sup> <a name="GlueDataCatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration"></a>

```go
func GlueDataCatalogConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId">ArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId"></a>

```go
func ArtifactId() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType">ArtifactType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference">MavenReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactType`<sup>Required</sup> <a name="ArtifactType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType"></a>

```go
func ArtifactType() *string
```

- *Type:* *string

---

##### `MavenReference`<sup>Required</sup> <a name="MavenReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference"></a>

```go
func MavenReference() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a>

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation"></a>

```go
func S3ContentLocation() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey">FileKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `FileKey`<sup>Required</sup> <a name="FileKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey"></a>

```go
func FileKey() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation">S3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3ContentLocation`<sup>Required</sup> <a name="S3ContentLocation" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation"></a>

```go
func S3ContentLocation() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath">BasePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath"></a>

```go
func BasePath() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration">CatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration">CustomArtifactsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration">DeployAsApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogConfiguration`<sup>Required</sup> <a name="CatalogConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration"></a>

```go
func CatalogConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a>

---

##### `CustomArtifactsConfiguration`<sup>Required</sup> <a name="CustomArtifactsConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration"></a>

```go
func CustomArtifactsConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a>

---

##### `DeployAsApplicationConfiguration`<sup>Required</sup> <a name="DeployAsApplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration"></a>

```go
func DeployAsApplicationConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime">ApplicationMaintenanceWindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationMaintenanceWindowStartTime`<sup>Required</sup> <a name="ApplicationMaintenanceWindowStartTime" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime"></a>

```go
func ApplicationMaintenanceWindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">DataAwsccKinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType">ApplicationRestoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName">SnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationRestoreType`<sup>Required</sup> <a name="ApplicationRestoreType" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType"></a>

```go
func ApplicationRestoreType() *string
```

- *Type:* *string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName"></a>

```go
func SnapshotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState">AllowNonRestoredState</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNonRestoredState`<sup>Required</sup> <a name="AllowNonRestoredState" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState"></a>

```go
func AllowNonRestoredState() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration">ApplicationRestoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration">FlinkRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationRestoreConfiguration`<sup>Required</sup> <a name="ApplicationRestoreConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration"></a>

```go
func ApplicationRestoreConfiguration() DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a>

---

##### `FlinkRunConfiguration`<sup>Required</sup> <a name="FlinkRunConfiguration" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration"></a>

```go
func FlinkRunConfiguration() DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">DataAwsccKinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationRunConfiguration">DataAwsccKinesisanalyticsv2ApplicationRunConfiguration</a>

---


### DataAwsccKinesisanalyticsv2ApplicationTagsList <a name="DataAwsccKinesisanalyticsv2ApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccKinesisanalyticsv2ApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference <a name="DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscckinesisanalyticsv2application"

dataawscckinesisanalyticsv2application.NewDataAwsccKinesisanalyticsv2ApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags">DataAwsccKinesisanalyticsv2ApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccKinesisanalyticsv2ApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKinesisanalyticsv2Application.DataAwsccKinesisanalyticsv2ApplicationTags">DataAwsccKinesisanalyticsv2ApplicationTags</a>

---



