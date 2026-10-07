# `dataAwsccConfigConfigurationRecorder` Submodule <a name="`dataAwsccConfigConfigurationRecorder` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigConfigurationRecorder <a name="DataAwsccConfigConfigurationRecorder" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/config_configuration_recorder awscc_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorder(scope Construct, id *string, config DataAwsccConfigConfigurationRecorderConfig) DataAwsccConfigConfigurationRecorder
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig">DataAwsccConfigConfigurationRecorderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig">DataAwsccConfigConfigurationRecorderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorder_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorder_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorder_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorder_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConfigConfigurationRecorder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigConfigurationRecorder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.recordingGroup">RecordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.recordingMode">RecordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference">DataAwsccConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.startedOnCreate">StartedOnCreate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecordingGroup`<sup>Required</sup> <a name="RecordingGroup" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.recordingGroup"></a>

```go
func RecordingGroup() DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.recordingMode"></a>

```go
func RecordingMode() DataAwsccConfigConfigurationRecorderRecordingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference">DataAwsccConfigConfigurationRecorderRecordingModeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `StartedOnCreate`<sup>Required</sup> <a name="StartedOnCreate" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.startedOnCreate"></a>

```go
func StartedOnCreate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorder.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigConfigurationRecorderConfig <a name="DataAwsccConfigConfigurationRecorderConfig" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/config_configuration_recorder#id DataAwsccConfigConfigurationRecorder#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigConfigurationRecorderRecordingGroup <a name="DataAwsccConfigConfigurationRecorderRecordingGroup" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderRecordingGroup {

}
```


### DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes {

}
```


### DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy {

}
```


### DataAwsccConfigConfigurationRecorderRecordingMode <a name="DataAwsccConfigConfigurationRecorderRecordingMode" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingMode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderRecordingMode {

}
```


### DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides <a name="DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

&dataawsccconfigconfigurationrecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---


### DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference <a name="DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">AllSupported</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">ExclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">IncludeGlobalResourceTypes</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">RecordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroup">DataAwsccConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllSupported`<sup>Required</sup> <a name="AllSupported" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```go
func AllSupported() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExclusionByResourceTypes`<sup>Required</sup> <a name="ExclusionByResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```go
func ExclusionByResourceTypes() DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a>

---

##### `IncludeGlobalResourceTypes`<sup>Required</sup> <a name="IncludeGlobalResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```go
func IncludeGlobalResourceTypes() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RecordingStrategy`<sup>Required</sup> <a name="RecordingStrategy" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```go
func RecordingStrategy() DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a>

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigConfigurationRecorderRecordingGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroup">DataAwsccConfigConfigurationRecorderRecordingGroup</a>

---


### DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">UseOnly</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy">DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UseOnly`<sup>Required</sup> <a name="UseOnly" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```go
func UseOnly() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy">DataAwsccConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---


### DataAwsccConfigConfigurationRecorderRecordingModeOutputReference <a name="DataAwsccConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingModeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigConfigurationRecorderRecordingModeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides">RecordingModeOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingMode">DataAwsccConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `RecordingModeOverrides`<sup>Required</sup> <a name="RecordingModeOverrides" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides"></a>

```go
func RecordingModeOverrides() DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigConfigurationRecorderRecordingMode
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingMode">DataAwsccConfigConfigurationRecorderRecordingMode</a>

---


### DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList <a name="DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get"></a>

```go
func Get(index *f64) DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference <a name="DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigconfigurationrecorder"

dataawsccconfigconfigurationrecorder.NewDataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency">RecordingFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides">DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RecordingFrequency`<sup>Required</sup> <a name="RecordingFrequency" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency"></a>

```go
func RecordingFrequency() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigConfigurationRecorder.DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides">DataAwsccConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>

---



