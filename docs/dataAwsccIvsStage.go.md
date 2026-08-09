# `dataAwsccIvsStage` Submodule <a name="`dataAwsccIvsStage` Submodule" id="@cdktn/provider-awscc.dataAwsccIvsStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIvsStage <a name="DataAwsccIvsStage" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_stage awscc_ivs_stage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStage(scope Construct, id *string, config DataAwsccIvsStageConfig) DataAwsccIvsStage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig">DataAwsccIvsStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig">DataAwsccIvsStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIvsStage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.DataAwsccIvsStage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.DataAwsccIvsStage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.DataAwsccIvsStage_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.DataAwsccIvsStage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIvsStage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIvsStage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIvsStage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_stage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIvsStage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.activeSessionId">ActiveSessionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.autoParticipantRecordingConfiguration">AutoParticipantRecordingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList">DataAwsccIvsStageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ActiveSessionId`<sup>Required</sup> <a name="ActiveSessionId" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.activeSessionId"></a>

```go
func ActiveSessionId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoParticipantRecordingConfiguration`<sup>Required</sup> <a name="AutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.autoParticipantRecordingConfiguration"></a>

```go
func AutoParticipantRecordingConfiguration() DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.tags"></a>

```go
func Tags() DataAwsccIvsStageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList">DataAwsccIvsStageTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIvsStageAutoParticipantRecordingConfiguration <a name="DataAwsccIvsStageAutoParticipantRecordingConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageAutoParticipantRecordingConfiguration {

}
```


### DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration {

}
```


### DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration {

}
```


### DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration {

}
```


### DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration {

}
```


### DataAwsccIvsStageConfig <a name="DataAwsccIvsStageConfig" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ivs_stage#id DataAwsccIvsStage#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIvsStageTags <a name="DataAwsccIvsStageTags" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

&dataawsccivsstage.DataAwsccIvsStageTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration">ParticipantRecordingHlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParticipantRecordingHlsConfiguration`<sup>Required</sup> <a name="ParticipantRecordingHlsConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.participantRecordingHlsConfiguration"></a>

```go
func ParticipantRecordingHlsConfiguration() DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfiguration</a>

---


### DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds">TargetSegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetSegmentDurationSeconds`<sup>Required</sup> <a name="TargetSegmentDurationSeconds" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.targetSegmentDurationSeconds"></a>

```go
func TargetSegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationParticipantRecordingHlsConfiguration</a>

---


### DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration">HlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes">MediaTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds">RecordingReconnectWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn">StorageConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration">ThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HlsConfiguration`<sup>Required</sup> <a name="HlsConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.hlsConfiguration"></a>

```go
func HlsConfiguration() DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationHlsConfigurationOutputReference</a>

---

##### `MediaTypes`<sup>Required</sup> <a name="MediaTypes" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.mediaTypes"></a>

```go
func MediaTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RecordingReconnectWindowSeconds`<sup>Required</sup> <a name="RecordingReconnectWindowSeconds" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.recordingReconnectWindowSeconds"></a>

```go
func RecordingReconnectWindowSeconds() *f64
```

- *Type:* *f64

---

##### `StorageConfigurationArn`<sup>Required</sup> <a name="StorageConfigurationArn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.storageConfigurationArn"></a>

```go
func StorageConfigurationArn() *string
```

- *Type:* *string

---

##### `ThumbnailConfiguration`<sup>Required</sup> <a name="ThumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.thumbnailConfiguration"></a>

```go
func ThumbnailConfiguration() DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageAutoParticipantRecordingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfiguration</a>

---


### DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration">ParticipantThumbnailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParticipantThumbnailConfiguration`<sup>Required</sup> <a name="ParticipantThumbnailConfiguration" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.participantThumbnailConfiguration"></a>

```go
func ParticipantThumbnailConfiguration() DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfiguration</a>

---


### DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference <a name="DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode">RecordingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage">Storage</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds">TargetIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingMode`<sup>Required</sup> <a name="RecordingMode" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.recordingMode"></a>

```go
func RecordingMode() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.storage"></a>

```go
func Storage() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIntervalSeconds`<sup>Required</sup> <a name="TargetIntervalSeconds" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.targetIntervalSeconds"></a>

```go
func TargetIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration">DataAwsccIvsStageAutoParticipantRecordingConfigurationThumbnailConfigurationParticipantThumbnailConfiguration</a>

---


### DataAwsccIvsStageTagsList <a name="DataAwsccIvsStageTagsList" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIvsStageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIvsStageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIvsStageTagsOutputReference <a name="DataAwsccIvsStageTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccivsstage"

dataawsccivsstage.NewDataAwsccIvsStageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIvsStageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTags">DataAwsccIvsStageTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIvsStageTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIvsStage.DataAwsccIvsStageTags">DataAwsccIvsStageTags</a>

---



