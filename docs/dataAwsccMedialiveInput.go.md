# `dataAwsccMedialiveInput` Submodule <a name="`dataAwsccMedialiveInput` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveInput <a name="DataAwsccMedialiveInput" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input awscc_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInput(scope Construct, id *string, config DataAwsccMedialiveInputConfig) DataAwsccMedialiveInput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig">DataAwsccMedialiveInputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig">DataAwsccMedialiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.DataAwsccMedialiveInput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.DataAwsccMedialiveInput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.DataAwsccMedialiveInput_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.DataAwsccMedialiveInput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccMedialiveInput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccMedialiveInput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccMedialiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.attachedChannels">AttachedChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList">DataAwsccMedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinationUrls">DestinationUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputClass">InputClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputDevices">InputDevices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList">DataAwsccMedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputId">InputId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputNetworkLocation">InputNetworkLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputPartnerIds">InputPartnerIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSecurityGroups">InputSecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSourceType">InputSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.mediaConnectFlows">MediaConnectFlows</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList">DataAwsccMedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.multicastSettings">MulticastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference">DataAwsccMedialiveInputMulticastSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.routerSettings">RouterSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference">DataAwsccMedialiveInputRouterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sdiSources">SdiSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.smpte2110ReceiverGroupSettings">Smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList">DataAwsccMedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sourceUrls">SourceUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.srtSettings">SrtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference">DataAwsccMedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttachedChannels`<sup>Required</sup> <a name="AttachedChannels" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.attachedChannels"></a>

```go
func AttachedChannels() *[]*string
```

- *Type:* *[]*string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinations"></a>

```go
func Destinations() DataAwsccMedialiveInputDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList">DataAwsccMedialiveInputDestinationsList</a>

---

##### `DestinationUrls`<sup>Required</sup> <a name="DestinationUrls" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.destinationUrls"></a>

```go
func DestinationUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InputClass`<sup>Required</sup> <a name="InputClass" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputClass"></a>

```go
func InputClass() *string
```

- *Type:* *string

---

##### `InputDevices`<sup>Required</sup> <a name="InputDevices" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputDevices"></a>

```go
func InputDevices() DataAwsccMedialiveInputInputDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList">DataAwsccMedialiveInputInputDevicesList</a>

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputId"></a>

```go
func InputId() *string
```

- *Type:* *string

---

##### `InputNetworkLocation`<sup>Required</sup> <a name="InputNetworkLocation" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputNetworkLocation"></a>

```go
func InputNetworkLocation() *string
```

- *Type:* *string

---

##### `InputPartnerIds`<sup>Required</sup> <a name="InputPartnerIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputPartnerIds"></a>

```go
func InputPartnerIds() *[]*string
```

- *Type:* *[]*string

---

##### `InputSecurityGroups`<sup>Required</sup> <a name="InputSecurityGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSecurityGroups"></a>

```go
func InputSecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InputSourceType`<sup>Required</sup> <a name="InputSourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.inputSourceType"></a>

```go
func InputSourceType() *string
```

- *Type:* *string

---

##### `MediaConnectFlows`<sup>Required</sup> <a name="MediaConnectFlows" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.mediaConnectFlows"></a>

```go
func MediaConnectFlows() DataAwsccMedialiveInputMediaConnectFlowsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList">DataAwsccMedialiveInputMediaConnectFlowsList</a>

---

##### `MulticastSettings`<sup>Required</sup> <a name="MulticastSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.multicastSettings"></a>

```go
func MulticastSettings() DataAwsccMedialiveInputMulticastSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference">DataAwsccMedialiveInputMulticastSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RouterSettings`<sup>Required</sup> <a name="RouterSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.routerSettings"></a>

```go
func RouterSettings() DataAwsccMedialiveInputRouterSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference">DataAwsccMedialiveInputRouterSettingsOutputReference</a>

---

##### `SdiSources`<sup>Required</sup> <a name="SdiSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sdiSources"></a>

```go
func SdiSources() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Smpte2110ReceiverGroupSettings`<sup>Required</sup> <a name="Smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.smpte2110ReceiverGroupSettings"></a>

```go
func Smpte2110ReceiverGroupSettings() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sources"></a>

```go
func Sources() DataAwsccMedialiveInputSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList">DataAwsccMedialiveInputSourcesList</a>

---

##### `SourceUrls`<sup>Required</sup> <a name="SourceUrls" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.sourceUrls"></a>

```go
func SourceUrls() *[]*string
```

- *Type:* *[]*string

---

##### `SrtSettings`<sup>Required</sup> <a name="SrtSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.srtSettings"></a>

```go
func SrtSettings() DataAwsccMedialiveInputSrtSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.vpc"></a>

```go
func Vpc() DataAwsccMedialiveInputVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference">DataAwsccMedialiveInputVpcOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveInputConfig <a name="DataAwsccMedialiveInputConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/medialive_input#id DataAwsccMedialiveInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMedialiveInputDestinations <a name="DataAwsccMedialiveInputDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputDestinations {

}
```


### DataAwsccMedialiveInputDestinationsNetworkRoutes <a name="DataAwsccMedialiveInputDestinationsNetworkRoutes" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputDestinationsNetworkRoutes {

}
```


### DataAwsccMedialiveInputDestinationsVpc <a name="DataAwsccMedialiveInputDestinationsVpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputDestinationsVpc {

}
```


### DataAwsccMedialiveInputInputDevices <a name="DataAwsccMedialiveInputInputDevices" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputInputDevices {

}
```


### DataAwsccMedialiveInputMediaConnectFlows <a name="DataAwsccMedialiveInputMediaConnectFlows" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputMediaConnectFlows {

}
```


### DataAwsccMedialiveInputMulticastSettings <a name="DataAwsccMedialiveInputMulticastSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputMulticastSettings {

}
```


### DataAwsccMedialiveInputMulticastSettingsSources <a name="DataAwsccMedialiveInputMulticastSettingsSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputMulticastSettingsSources {

}
```


### DataAwsccMedialiveInputRouterSettings <a name="DataAwsccMedialiveInputRouterSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputRouterSettings {

}
```


### DataAwsccMedialiveInputRouterSettingsDestinations <a name="DataAwsccMedialiveInputRouterSettingsDestinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputRouterSettingsDestinations {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps {

}
```


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp {

}
```


### DataAwsccMedialiveInputSources <a name="DataAwsccMedialiveInputSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSources {

}
```


### DataAwsccMedialiveInputSrtSettings <a name="DataAwsccMedialiveInputSrtSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSrtSettings {

}
```


### DataAwsccMedialiveInputSrtSettingsSrtCallerSources <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources {

}
```


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption {

}
```


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettings <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings {

}
```


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption {

}
```


### DataAwsccMedialiveInputVpc <a name="DataAwsccMedialiveInputVpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

&dataawsccmedialiveinput.DataAwsccMedialiveInputVpc {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMedialiveInputDestinationsList <a name="DataAwsccMedialiveInputDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputDestinationsNetworkRoutesList <a name="DataAwsccMedialiveInputDestinationsNetworkRoutesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputDestinationsNetworkRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputDestinationsNetworkRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference <a name="DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes">DataAwsccMedialiveInputDestinationsNetworkRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputDestinationsNetworkRoutes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutes">DataAwsccMedialiveInputDestinationsNetworkRoutes</a>

---


### DataAwsccMedialiveInputDestinationsOutputReference <a name="DataAwsccMedialiveInputDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.networkRoutes">NetworkRoutes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList">DataAwsccMedialiveInputDestinationsNetworkRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.staticIpAddress">StaticIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference">DataAwsccMedialiveInputDestinationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations">DataAwsccMedialiveInputDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkRoutes`<sup>Required</sup> <a name="NetworkRoutes" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.networkRoutes"></a>

```go
func NetworkRoutes() DataAwsccMedialiveInputDestinationsNetworkRoutesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsNetworkRoutesList">DataAwsccMedialiveInputDestinationsNetworkRoutesList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `StaticIpAddress`<sup>Required</sup> <a name="StaticIpAddress" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.staticIpAddress"></a>

```go
func StaticIpAddress() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.vpc"></a>

```go
func Vpc() DataAwsccMedialiveInputDestinationsVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference">DataAwsccMedialiveInputDestinationsVpcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinations">DataAwsccMedialiveInputDestinations</a>

---


### DataAwsccMedialiveInputDestinationsVpcOutputReference <a name="DataAwsccMedialiveInputDestinationsVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputDestinationsVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputDestinationsVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc">DataAwsccMedialiveInputDestinationsVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputDestinationsVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputDestinationsVpc">DataAwsccMedialiveInputDestinationsVpc</a>

---


### DataAwsccMedialiveInputInputDevicesList <a name="DataAwsccMedialiveInputInputDevicesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputInputDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputInputDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputInputDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputInputDevicesOutputReference <a name="DataAwsccMedialiveInputInputDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputInputDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputInputDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices">DataAwsccMedialiveInputInputDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputInputDevices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputInputDevices">DataAwsccMedialiveInputInputDevices</a>

---


### DataAwsccMedialiveInputMediaConnectFlowsList <a name="DataAwsccMedialiveInputMediaConnectFlowsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputMediaConnectFlowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputMediaConnectFlowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputMediaConnectFlowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputMediaConnectFlowsOutputReference <a name="DataAwsccMedialiveInputMediaConnectFlowsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputMediaConnectFlowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputMediaConnectFlowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows">DataAwsccMedialiveInputMediaConnectFlows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputMediaConnectFlows
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMediaConnectFlows">DataAwsccMedialiveInputMediaConnectFlows</a>

---


### DataAwsccMedialiveInputMulticastSettingsOutputReference <a name="DataAwsccMedialiveInputMulticastSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputMulticastSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputMulticastSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList">DataAwsccMedialiveInputMulticastSettingsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings">DataAwsccMedialiveInputMulticastSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.sources"></a>

```go
func Sources() DataAwsccMedialiveInputMulticastSettingsSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList">DataAwsccMedialiveInputMulticastSettingsSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputMulticastSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettings">DataAwsccMedialiveInputMulticastSettings</a>

---


### DataAwsccMedialiveInputMulticastSettingsSourcesList <a name="DataAwsccMedialiveInputMulticastSettingsSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputMulticastSettingsSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputMulticastSettingsSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference <a name="DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputMulticastSettingsSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources">DataAwsccMedialiveInputMulticastSettingsSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputMulticastSettingsSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputMulticastSettingsSources">DataAwsccMedialiveInputMulticastSettingsSources</a>

---


### DataAwsccMedialiveInputRouterSettingsDestinationsList <a name="DataAwsccMedialiveInputRouterSettingsDestinationsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputRouterSettingsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputRouterSettingsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference <a name="DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputRouterSettingsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn">RouterOutputArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations">DataAwsccMedialiveInputRouterSettingsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `RouterOutputArn`<sup>Required</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn"></a>

```go
func RouterOutputArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputRouterSettingsDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinations">DataAwsccMedialiveInputRouterSettingsDestinations</a>

---


### DataAwsccMedialiveInputRouterSettingsOutputReference <a name="DataAwsccMedialiveInputRouterSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputRouterSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputRouterSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList">DataAwsccMedialiveInputRouterSettingsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings">DataAwsccMedialiveInputRouterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.destinations"></a>

```go
func Destinations() DataAwsccMedialiveInputRouterSettingsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsDestinationsList">DataAwsccMedialiveInputRouterSettingsDestinationsList</a>

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputRouterSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputRouterSettings">DataAwsccMedialiveInputRouterSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups">Smpte2110ReceiverGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Smpte2110ReceiverGroups`<sup>Required</sup> <a name="Smpte2110ReceiverGroups" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups"></a>

```go
func Smpte2110ReceiverGroups() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings"></a>

```go
func SdpSettings() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex"></a>

```go
func MediaIndex() *f64
```

- *Type:* *f64

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl"></a>

```go
func SdpUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex"></a>

```go
func MediaIndex() *f64
```

- *Type:* *f64

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl"></a>

```go
func SdpUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps">AncillarySdps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps">AudioSdps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp">VideoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AncillarySdps`<sup>Required</sup> <a name="AncillarySdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps"></a>

```go
func AncillarySdps() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a>

---

##### `AudioSdps`<sup>Required</sup> <a name="AudioSdps" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps"></a>

```go
func AudioSdps() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a>

---

##### `VideoSdp`<sup>Required</sup> <a name="VideoSdp" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp"></a>

```go
func VideoSdp() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---


### DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference <a name="DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex"></a>

```go
func MediaIndex() *f64
```

- *Type:* *f64

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl"></a>

```go
func SdpUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">DataAwsccMedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---


### DataAwsccMedialiveInputSourcesList <a name="DataAwsccMedialiveInputSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputSourcesOutputReference <a name="DataAwsccMedialiveInputSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.passwordParam">PasswordParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources">DataAwsccMedialiveInputSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordParam`<sup>Required</sup> <a name="PasswordParam" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.passwordParam"></a>

```go
func PasswordParam() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSources">DataAwsccMedialiveInputSources</a>

---


### DataAwsccMedialiveInputSrtSettingsOutputReference <a name="DataAwsccMedialiveInputSrtSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSrtSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtCallerSources">SrtCallerSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtListenerSettings">SrtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings">DataAwsccMedialiveInputSrtSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrtCallerSources`<sup>Required</sup> <a name="SrtCallerSources" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtCallerSources"></a>

```go
func SrtCallerSources() DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList</a>

---

##### `SrtListenerSettings`<sup>Required</sup> <a name="SrtListenerSettings" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.srtListenerSettings"></a>

```go
func SrtListenerSettings() DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSrtSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettings">DataAwsccMedialiveInputSrtSettings</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `PassphraseSecretArn`<sup>Required</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn"></a>

```go
func PassphraseSecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency">MinimumLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress">SrtListenerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort">SrtListenerPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources">DataAwsccMedialiveInputSrtSettingsSrtCallerSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption"></a>

```go
func Decryption() DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a>

---

##### `MinimumLatency`<sup>Required</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency"></a>

```go
func MinimumLatency() *f64
```

- *Type:* *f64

---

##### `SrtListenerAddress`<sup>Required</sup> <a name="SrtListenerAddress" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress"></a>

```go
func SrtListenerAddress() *string
```

- *Type:* *string

---

##### `SrtListenerPort`<sup>Required</sup> <a name="SrtListenerPort" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort"></a>

```go
func SrtListenerPort() *string
```

- *Type:* *string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSrtSettingsSrtCallerSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtCallerSources">DataAwsccMedialiveInputSrtSettingsSrtCallerSources</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `PassphraseSecretArn`<sup>Required</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn"></a>

```go
func PassphraseSecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---


### DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference <a name="DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency">MinimumLatency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings">DataAwsccMedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption"></a>

```go
func Decryption() DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a>

---

##### `MinimumLatency`<sup>Required</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency"></a>

```go
func MinimumLatency() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputSrtSettingsSrtListenerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputSrtSettingsSrtListenerSettings">DataAwsccMedialiveInputSrtSettingsSrtListenerSettings</a>

---


### DataAwsccMedialiveInputVpcOutputReference <a name="DataAwsccMedialiveInputVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccmedialiveinput"

dataawsccmedialiveinput.NewDataAwsccMedialiveInputVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccMedialiveInputVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc">DataAwsccMedialiveInputVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccMedialiveInputVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveInput.DataAwsccMedialiveInputVpc">DataAwsccMedialiveInputVpc</a>

---



