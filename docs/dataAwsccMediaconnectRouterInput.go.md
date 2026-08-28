# `dataAwsccMediaconnectRouterInput` Submodule <a name="`dataAwsccMediaconnectRouterInput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectRouterInput <a name="DataAwsccMediaconnectRouterInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_input awscc_mediaconnect_router_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInput(scope Construct, id *string, config DataAwsccMediaconnectRouterInputConfig) DataAwsccMediaconnectRouterInput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig">DataAwsccMediaconnectRouterInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig">DataAwsccMediaconnectRouterInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectRouterInput resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInput_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMediaconnectRouterInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMediaconnectRouterInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMediaconnectRouterInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectRouterInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisConfiguration">ContentQualityAnalysisConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisType">ContentQualityAnalysisType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routedOutputs">RoutedOutputs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routerInputId">RouterInputId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routingScope">RoutingScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList">DataAwsccMediaconnectRouterInputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.transitEncryption">TransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.configuration"></a>

```go
func Configuration() DataAwsccMediaconnectRouterInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationOutputReference</a>

---

##### `ContentQualityAnalysisConfiguration`<sup>Required</sup> <a name="ContentQualityAnalysisConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisConfiguration"></a>

```go
func ContentQualityAnalysisConfiguration() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference</a>

---

##### `ContentQualityAnalysisType`<sup>Required</sup> <a name="ContentQualityAnalysisType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.contentQualityAnalysisType"></a>

```go
func ContentQualityAnalysisType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceConfiguration"></a>

```go
func MaintenanceConfiguration() DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference</a>

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maintenanceType"></a>

```go
func MaintenanceType() *string
```

- *Type:* *string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `RoutedOutputs`<sup>Required</sup> <a name="RoutedOutputs" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routedOutputs"></a>

```go
func RoutedOutputs() *f64
```

- *Type:* *f64

---

##### `RouterInputId`<sup>Required</sup> <a name="RouterInputId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routerInputId"></a>

```go
func RouterInputId() *string
```

- *Type:* *string

---

##### `RoutingScope`<sup>Required</sup> <a name="RoutingScope" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.routingScope"></a>

```go
func RoutingScope() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tags"></a>

```go
func Tags() DataAwsccMediaconnectRouterInputTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList">DataAwsccMediaconnectRouterInputTagsList</a>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `TransitEncryption`<sup>Required</sup> <a name="TransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.transitEncryption"></a>

```go
func TransitEncryption() DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectRouterInputConfig <a name="DataAwsccMediaconnectRouterInputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_router_input#id DataAwsccMediaconnectRouterInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectRouterInputConfiguration <a name="DataAwsccMediaconnectRouterInputConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailover <a name="DataAwsccMediaconnectRouterInputConfigurationFailover" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailover {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMerge <a name="DataAwsccMediaconnectRouterInputConfigurationMerge" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMerge {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist {

}
```


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandard <a name="DataAwsccMediaconnectRouterInputConfigurationStandard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandard {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration {

}
```


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey {

}
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration {

}
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel {

}
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames {

}
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames {

}
```


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio {

}
```


### DataAwsccMediaconnectRouterInputMaintenanceConfiguration <a name="DataAwsccMediaconnectRouterInputMaintenanceConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration {

}
```


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime {

}
```


### DataAwsccMediaconnectRouterInputTags <a name="DataAwsccMediaconnectRouterInputTags" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputTags {

}
```


### DataAwsccMediaconnectRouterInputTransitEncryption <a name="DataAwsccMediaconnectRouterInputTransitEncryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputTransitEncryption {

}
```


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration {

}
```


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

&dataawsccmediaconnectrouterinput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.primarySourceIndex">PrimarySourceIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.protocolConfigurations">ProtocolConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.sourcePriorityMode">SourcePriorityMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover">DataAwsccMediaconnectRouterInputConfigurationFailover</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaceArn`<sup>Required</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.networkInterfaceArn"></a>

```go
func NetworkInterfaceArn() *string
```

- *Type:* *string

---

##### `PrimarySourceIndex`<sup>Required</sup> <a name="PrimarySourceIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.primarySourceIndex"></a>

```go
func PrimarySourceIndex() *f64
```

- *Type:* *f64

---

##### `ProtocolConfigurations`<sup>Required</sup> <a name="ProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.protocolConfigurations"></a>

```go
func ProtocolConfigurations() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList</a>

---

##### `SourcePriorityMode`<sup>Required</sup> <a name="SourcePriorityMode" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.sourcePriorityMode"></a>

```go
func SourcePriorityMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailover
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailover">DataAwsccMediaconnectRouterInputConfigurationFailover</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rist"></a>

```go
func Rist() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.rtp"></a>

```go
func Rtp() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtCaller"></a>

```go
func SrtCaller() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.srtListener"></a>

```go
func SrtListener() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurations</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RecoveryLatencyMilliseconds`<sup>Required</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```go
func RecoveryLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRistOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardErrorCorrection`<sup>Required</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection"></a>

```go
func ForwardErrorCorrection() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.decryptionConfiguration">DecryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecryptionConfiguration`<sup>Required</sup> <a name="DecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.decryptionConfiguration"></a>

```go
func DecryptionConfiguration() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerDecryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourceAddress"></a>

```go
func SourceAddress() *string
```

- *Type:* *string

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCallerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtCaller</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.decryptionConfiguration">DecryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecryptionConfiguration`<sup>Required</sup> <a name="DecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.decryptionConfiguration"></a>

```go
func DecryptionConfiguration() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerDecryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener">DataAwsccMediaconnectRouterInputConfigurationFailoverProtocolConfigurationsSrtListener</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowOutputArn">FlowOutputArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.sourceTransitDecryption">SourceTransitDecryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `FlowOutputArn`<sup>Required</sup> <a name="FlowOutputArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.flowOutputArn"></a>

```go
func FlowOutputArn() *string
```

- *Type:* *string

---

##### `SourceTransitDecryption`<sup>Required</sup> <a name="SourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.sourceTransitDecryption"></a>

```go
func SourceTransitDecryption() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlow</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```go
func Automatic() *string
```

- *Type:* *string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```go
func SecretsManager() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration"></a>

```go
func EncryptionKeyConfiguration() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.encryptionKeyType"></a>

```go
func EncryptionKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowSourceTransitDecryption</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelArn">MediaLiveChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelOutputName">MediaLiveChannelOutputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLivePipelineId">MediaLivePipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.sourceTransitDecryption">SourceTransitDecryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediaLiveChannelArn`<sup>Required</sup> <a name="MediaLiveChannelArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelArn"></a>

```go
func MediaLiveChannelArn() *string
```

- *Type:* *string

---

##### `MediaLiveChannelOutputName`<sup>Required</sup> <a name="MediaLiveChannelOutputName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLiveChannelOutputName"></a>

```go
func MediaLiveChannelOutputName() *string
```

- *Type:* *string

---

##### `MediaLivePipelineId`<sup>Required</sup> <a name="MediaLivePipelineId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.mediaLivePipelineId"></a>

```go
func MediaLivePipelineId() *string
```

- *Type:* *string

---

##### `SourceTransitDecryption`<sup>Required</sup> <a name="SourceTransitDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.sourceTransitDecryption"></a>

```go
func SourceTransitDecryption() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannel</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```go
func Automatic() *string
```

- *Type:* *string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```go
func SecretsManager() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyConfiguration"></a>

```go
func EncryptionKeyConfiguration() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.encryptionKeyType"></a>

```go
func EncryptionKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelSourceTransitDecryption</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMergeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.mergeRecoveryWindowMilliseconds">MergeRecoveryWindowMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.protocolConfigurations">ProtocolConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge">DataAwsccMediaconnectRouterInputConfigurationMerge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MergeRecoveryWindowMilliseconds`<sup>Required</sup> <a name="MergeRecoveryWindowMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.mergeRecoveryWindowMilliseconds"></a>

```go
func MergeRecoveryWindowMilliseconds() *f64
```

- *Type:* *f64

---

##### `NetworkInterfaceArn`<sup>Required</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.networkInterfaceArn"></a>

```go
func NetworkInterfaceArn() *string
```

- *Type:* *string

---

##### `ProtocolConfigurations`<sup>Required</sup> <a name="ProtocolConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.protocolConfigurations"></a>

```go
func ProtocolConfigurations() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMerge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMerge">DataAwsccMediaconnectRouterInputConfigurationMerge</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rist"></a>

```go
func Rist() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.rtp"></a>

```go
func Rtp() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurations</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RecoveryLatencyMilliseconds`<sup>Required</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```go
func RecoveryLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRistOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardErrorCorrection`<sup>Required</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.forwardErrorCorrection"></a>

```go
func ForwardErrorCorrection() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp">DataAwsccMediaconnectRouterInputConfigurationMergeProtocolConfigurationsRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.failover">Failover</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaConnectFlow">MediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaLiveChannel">MediaLiveChannel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.merge">Merge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration">DataAwsccMediaconnectRouterInputConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.failover"></a>

```go
func Failover() DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference">DataAwsccMediaconnectRouterInputConfigurationFailoverOutputReference</a>

---

##### `MediaConnectFlow`<sup>Required</sup> <a name="MediaConnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaConnectFlow"></a>

```go
func MediaConnectFlow() DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaConnectFlowOutputReference</a>

---

##### `MediaLiveChannel`<sup>Required</sup> <a name="MediaLiveChannel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.mediaLiveChannel"></a>

```go
func MediaLiveChannel() DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference">DataAwsccMediaconnectRouterInputConfigurationMediaLiveChannelOutputReference</a>

---

##### `Merge`<sup>Required</sup> <a name="Merge" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.merge"></a>

```go
func Merge() DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference">DataAwsccMediaconnectRouterInputConfigurationMergeOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.standard"></a>

```go
func Standard() DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfiguration">DataAwsccMediaconnectRouterInputConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard">DataAwsccMediaconnectRouterInputConfigurationStandard</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaceArn`<sup>Required</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```go
func NetworkInterfaceArn() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```go
func ProtocolConfiguration() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandard">DataAwsccMediaconnectRouterInputConfigurationStandard</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```go
func Rist() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```go
func Rtp() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```go
func SrtCaller() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```go
func SrtListener() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds">RecoveryLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RecoveryLatencyMilliseconds`<sup>Required</sup> <a name="RecoveryLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.recoveryLatencyMilliseconds"></a>

```go
func RecoveryLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRist</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardErrorCorrection`<sup>Required</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```go
func ForwardErrorCorrection() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationRtp</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.decryptionConfiguration">DecryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourcePort">SourcePort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecryptionConfiguration`<sup>Required</sup> <a name="DecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.decryptionConfiguration"></a>

```go
func DecryptionConfiguration() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerDecryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourceAddress"></a>

```go
func SourceAddress() *string
```

- *Type:* *string

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.sourcePort"></a>

```go
func SourcePort() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtCaller</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKey</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfiguration</a>

---


### DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.decryptionConfiguration">DecryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DecryptionConfiguration`<sup>Required</sup> <a name="DecryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.decryptionConfiguration"></a>

```go
func DecryptionConfiguration() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerDecryptionConfigurationOutputReference</a>

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener">DataAwsccMediaconnectRouterInputConfigurationStandardProtocolConfigurationSrtListener</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFrames</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFrames</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlackFrames`<sup>Required</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.blackFrames"></a>

```go
func BlackFrames() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelBlackFramesOutputReference</a>

---

##### `FrozenFrames`<sup>Required</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.frozenFrames"></a>

```go
func FrozenFrames() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelFrozenFramesOutputReference</a>

---

##### `SilentAudio`<sup>Required</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.silentAudio"></a>

```go
func SilentAudio() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevel</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.thresholdSeconds"></a>

```go
func ThresholdSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudioOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelSilentAudio</a>

---


### DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.contentLevel">ContentLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLevel`<sup>Required</sup> <a name="ContentLevel" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.contentLevel"></a>

```go
func ContentLevel() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationContentLevelOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration">DataAwsccMediaconnectRouterInputContentQualityAnalysisConfiguration</a>

---


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.preferredDayTime">PreferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration">DataAwsccMediaconnectRouterInputMaintenanceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `PreferredDayTime`<sup>Required</sup> <a name="PreferredDayTime" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```go
func PreferredDayTime() DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputMaintenanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfiguration">DataAwsccMediaconnectRouterInputMaintenanceConfiguration</a>

---


### DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime">DataAwsccMediaconnectRouterInputMaintenanceConfigurationPreferredDayTime</a>

---


### DataAwsccMediaconnectRouterInputTagsList <a name="DataAwsccMediaconnectRouterInputTagsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMediaconnectRouterInputTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get"></a>

```go
func Get(index *f64) DataAwsccMediaconnectRouterInputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMediaconnectRouterInputTagsOutputReference <a name="DataAwsccMediaconnectRouterInputTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMediaconnectRouterInputTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags">DataAwsccMediaconnectRouterInputTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTags">DataAwsccMediaconnectRouterInputTags</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```go
func Automatic() *string
```

- *Type:* *string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```go
func SecretsManager() DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfiguration</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference <a name="DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccmediaconnectrouterinput"

dataawsccmediaconnectrouterinput.NewDataAwsccMediaconnectRouterInputTransitEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption">DataAwsccMediaconnectRouterInputTransitEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```go
func EncryptionKeyConfiguration() DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference">DataAwsccMediaconnectRouterInputTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```go
func EncryptionKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMediaconnectRouterInputTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectRouterInput.DataAwsccMediaconnectRouterInputTransitEncryption">DataAwsccMediaconnectRouterInputTransitEncryption</a>

---



