# `mwaaserverlessWorkflow` Submodule <a name="`mwaaserverlessWorkflow` Submodule" id="@cdktn/provider-awscc.mwaaserverlessWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaserverlessWorkflow <a name="MwaaserverlessWorkflow" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow awscc_mwaaserverless_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflow(scope Construct, id *string, config MwaaserverlessWorkflowConfig) MwaaserverlessWorkflow
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location">PutDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode">ResetTriggerMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinitionS3Location` <a name="PutDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location"></a>

```go
func PutDefinitionS3Location(value MwaaserverlessWorkflowDefinitionS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value MwaaserverlessWorkflowEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value MwaaserverlessWorkflowLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value MwaaserverlessWorkflowNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTriggerMode` <a name="ResetTriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode"></a>

```go
func ResetTriggerMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.MwaaserverlessWorkflow_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.MwaaserverlessWorkflow_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.MwaaserverlessWorkflow_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.MwaaserverlessWorkflow_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwaaserverlessWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwaaserverlessWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MwaaserverlessWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration">ScheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus">WorkflowStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion">WorkflowVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput">DefinitionS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput">TriggerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DefinitionS3Location`<sup>Required</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location"></a>

```go
func DefinitionS3Location() MwaaserverlessWorkflowDefinitionS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() MwaaserverlessWorkflowEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() MwaaserverlessWorkflowLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration"></a>

```go
func NetworkConfiguration() MwaaserverlessWorkflowNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a>

---

##### `ScheduleConfiguration`<sup>Required</sup> <a name="ScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration"></a>

```go
func ScheduleConfiguration() MwaaserverlessWorkflowScheduleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a>

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn"></a>

```go
func WorkflowArn() *string
```

- *Type:* *string

---

##### `WorkflowStatus`<sup>Required</sup> <a name="WorkflowStatus" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus"></a>

```go
func WorkflowStatus() *string
```

- *Type:* *string

---

##### `WorkflowVersion`<sup>Required</sup> <a name="WorkflowVersion" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion"></a>

```go
func WorkflowVersion() *string
```

- *Type:* *string

---

##### `DefinitionS3LocationInput`<sup>Optional</sup> <a name="DefinitionS3LocationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput"></a>

```go
func DefinitionS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TriggerModeInput`<sup>Optional</sup> <a name="TriggerModeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput"></a>

```go
func TriggerModeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TriggerMode`<sup>Required</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode"></a>

```go
func TriggerMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaserverlessWorkflowConfig <a name="MwaaserverlessWorkflowConfig" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefinitionS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location,
	RoleArn: *string,
	Description: *string,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration,
	LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration,
	Name: *string,
	NetworkConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration,
	Tags: *map[string]*string,
	TriggerMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location">DefinitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A map of key-value pairs to be applied as tags. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode">TriggerMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefinitionS3Location`<sup>Required</sup> <a name="DefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location"></a>

```go
DefinitionS3Location MwaaserverlessWorkflowDefinitionS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration MwaaserverlessWorkflowEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}.

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration MwaaserverlessWorkflowLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration MwaaserverlessWorkflowNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A map of key-value pairs to be applied as tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#tags MwaaserverlessWorkflow#tags}

---

##### `TriggerMode`<sup>Optional</sup> <a name="TriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode"></a>

```go
TriggerMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}.

---

### MwaaserverlessWorkflowDefinitionS3Location <a name="MwaaserverlessWorkflowDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowDefinitionS3Location {
	Bucket: *string,
	ObjectKey: *string,
	VersionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey">ObjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId">VersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey"></a>

```go
ObjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId"></a>

```go
VersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowEncryptionConfiguration <a name="MwaaserverlessWorkflowEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowEncryptionConfiguration {
	KmsKeyId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}.

---

### MwaaserverlessWorkflowLoggingConfiguration <a name="MwaaserverlessWorkflowLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowLoggingConfiguration {
	LogGroupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}. |

---

##### `LogGroupName`<sup>Optional</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}.

---

### MwaaserverlessWorkflowNetworkConfiguration <a name="MwaaserverlessWorkflowNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowNetworkConfiguration {
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}.

---

### MwaaserverlessWorkflowScheduleConfiguration <a name="MwaaserverlessWorkflowScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

&mwaaserverlessworkflow.MwaaserverlessWorkflowScheduleConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### MwaaserverlessWorkflowDefinitionS3LocationOutputReference <a name="MwaaserverlessWorkflowDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflowDefinitionS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaserverlessWorkflowDefinitionS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId"></a>

```go
func ResetVersionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```go
func ObjectKeyInput() *string
```

- *Type:* *string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```go
func VersionIdInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey"></a>

```go
func ObjectKey() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwaaserverlessWorkflowEncryptionConfigurationOutputReference <a name="MwaaserverlessWorkflowEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflowEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaserverlessWorkflowEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwaaserverlessWorkflowLoggingConfigurationOutputReference <a name="MwaaserverlessWorkflowLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflowLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaserverlessWorkflowLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName">ResetLogGroupName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupName` <a name="ResetLogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName"></a>

```go
func ResetLogGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwaaserverlessWorkflowNetworkConfigurationOutputReference <a name="MwaaserverlessWorkflowNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflowNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaserverlessWorkflowNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MwaaserverlessWorkflowScheduleConfigurationOutputReference <a name="MwaaserverlessWorkflowScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mwaaserverlessworkflow"

mwaaserverlessworkflow.NewMwaaserverlessWorkflowScheduleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MwaaserverlessWorkflowScheduleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression">CronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression"></a>

```go
func CronExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() MwaaserverlessWorkflowScheduleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a>

---



