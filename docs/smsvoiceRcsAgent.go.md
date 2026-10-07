# `smsvoiceRcsAgent` Submodule <a name="`smsvoiceRcsAgent` Submodule" id="@cdktn/provider-awscc.smsvoiceRcsAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SmsvoiceRcsAgent <a name="SmsvoiceRcsAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent awscc_smsvoice_rcs_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.NewSmsvoiceRcsAgent(scope Construct, id *string, config SmsvoiceRcsAgentConfig) SmsvoiceRcsAgent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig">SmsvoiceRcsAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn">ResetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole">ResetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled">ResetTwoWayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName">ResetTwoWayMediaS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix">ResetTwoWayMediaS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role">ResetTwoWayMediaS3Role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled">ResetTwoWayRcsEventsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetOptOutListName"></a>

```go
func ResetOptOutListName()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetSelfManagedOptOutsEnabled"></a>

```go
func ResetSelfManagedOptOutsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTwoWayChannelArn` <a name="ResetTwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelArn"></a>

```go
func ResetTwoWayChannelArn()
```

##### `ResetTwoWayChannelRole` <a name="ResetTwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayChannelRole"></a>

```go
func ResetTwoWayChannelRole()
```

##### `ResetTwoWayEnabled` <a name="ResetTwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayEnabled"></a>

```go
func ResetTwoWayEnabled()
```

##### `ResetTwoWayMediaS3BucketName` <a name="ResetTwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3BucketName"></a>

```go
func ResetTwoWayMediaS3BucketName()
```

##### `ResetTwoWayMediaS3KeyPrefix` <a name="ResetTwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3KeyPrefix"></a>

```go
func ResetTwoWayMediaS3KeyPrefix()
```

##### `ResetTwoWayMediaS3Role` <a name="ResetTwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayMediaS3Role"></a>

```go
func ResetTwoWayMediaS3Role()
```

##### `ResetTwoWayRcsEventsEnabled` <a name="ResetTwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.resetTwoWayRcsEventsEnabled"></a>

```go
func ResetTwoWayRcsEventsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.SmsvoiceRcsAgent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.SmsvoiceRcsAgent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.SmsvoiceRcsAgent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.SmsvoiceRcsAgent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SmsvoiceRcsAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SmsvoiceRcsAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SmsvoiceRcsAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SmsvoiceRcsAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn">RcsAgentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId">RcsAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent">TestingAgent</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput">TwoWayChannelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput">TwoWayChannelRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput">TwoWayEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput">TwoWayMediaS3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput">TwoWayMediaS3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput">TwoWayMediaS3RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput">TwoWayRcsEventsEnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName">TwoWayMediaS3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix">TwoWayMediaS3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role">TwoWayMediaS3Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled">TwoWayRcsEventsEnabled</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `RcsAgentArn`<sup>Required</sup> <a name="RcsAgentArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentArn"></a>

```go
func RcsAgentArn() *string
```

- *Type:* *string

---

##### `RcsAgentId`<sup>Required</sup> <a name="RcsAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.rcsAgentId"></a>

```go
func RcsAgentId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tags"></a>

```go
func Tags() SmsvoiceRcsAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList">SmsvoiceRcsAgentTagsList</a>

---

##### `TestingAgent`<sup>Required</sup> <a name="TestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.testingAgent"></a>

```go
func TestingAgent() SmsvoiceRcsAgentTestingAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference">SmsvoiceRcsAgentTestingAgentOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListNameInput"></a>

```go
func OptOutListNameInput() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabledInput"></a>

```go
func SelfManagedOptOutsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TwoWayChannelArnInput`<sup>Optional</sup> <a name="TwoWayChannelArnInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArnInput"></a>

```go
func TwoWayChannelArnInput() *string
```

- *Type:* *string

---

##### `TwoWayChannelRoleInput`<sup>Optional</sup> <a name="TwoWayChannelRoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRoleInput"></a>

```go
func TwoWayChannelRoleInput() *string
```

- *Type:* *string

---

##### `TwoWayEnabledInput`<sup>Optional</sup> <a name="TwoWayEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabledInput"></a>

```go
func TwoWayEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TwoWayMediaS3BucketNameInput`<sup>Optional</sup> <a name="TwoWayMediaS3BucketNameInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketNameInput"></a>

```go
func TwoWayMediaS3BucketNameInput() *string
```

- *Type:* *string

---

##### `TwoWayMediaS3KeyPrefixInput`<sup>Optional</sup> <a name="TwoWayMediaS3KeyPrefixInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefixInput"></a>

```go
func TwoWayMediaS3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `TwoWayMediaS3RoleInput`<sup>Optional</sup> <a name="TwoWayMediaS3RoleInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3RoleInput"></a>

```go
func TwoWayMediaS3RoleInput() *string
```

- *Type:* *string

---

##### `TwoWayRcsEventsEnabledInput`<sup>Optional</sup> <a name="TwoWayRcsEventsEnabledInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabledInput"></a>

```go
func TwoWayRcsEventsEnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.optOutListName"></a>

```go
func OptOutListName() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.selfManagedOptOutsEnabled"></a>

```go
func SelfManagedOptOutsEnabled() interface{}
```

- *Type:* interface{}

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelArn"></a>

```go
func TwoWayChannelArn() *string
```

- *Type:* *string

---

##### `TwoWayChannelRole`<sup>Required</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayChannelRole"></a>

```go
func TwoWayChannelRole() *string
```

- *Type:* *string

---

##### `TwoWayEnabled`<sup>Required</sup> <a name="TwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayEnabled"></a>

```go
func TwoWayEnabled() interface{}
```

- *Type:* interface{}

---

##### `TwoWayMediaS3BucketName`<sup>Required</sup> <a name="TwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3BucketName"></a>

```go
func TwoWayMediaS3BucketName() *string
```

- *Type:* *string

---

##### `TwoWayMediaS3KeyPrefix`<sup>Required</sup> <a name="TwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3KeyPrefix"></a>

```go
func TwoWayMediaS3KeyPrefix() *string
```

- *Type:* *string

---

##### `TwoWayMediaS3Role`<sup>Required</sup> <a name="TwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayMediaS3Role"></a>

```go
func TwoWayMediaS3Role() *string
```

- *Type:* *string

---

##### `TwoWayRcsEventsEnabled`<sup>Required</sup> <a name="TwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.twoWayRcsEventsEnabled"></a>

```go
func TwoWayRcsEventsEnabled() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SmsvoiceRcsAgentConfig <a name="SmsvoiceRcsAgentConfig" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

&smsvoicercsagent.SmsvoiceRcsAgentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeletionProtectionEnabled: interface{},
	OptOutListName: *string,
	SelfManagedOptOutsEnabled: interface{},
	Tags: interface{},
	TwoWayChannelArn: *string,
	TwoWayChannelRole: *string,
	TwoWayEnabled: interface{},
	TwoWayMediaS3BucketName: *string,
	TwoWayMediaS3KeyPrefix: *string,
	TwoWayMediaS3Role: *string,
	TwoWayRcsEventsEnabled: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | When set to true the RCS agent can't be deleted. By default this is false. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | The name of the opt-out list associated with the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>interface{}</code> | When set to true two-way messaging is enabled for the RCS agent. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName">TwoWayMediaS3BucketName</a></code> | <code>*string</code> | The name of the Amazon S3 bucket where inbound RCS media objects are written. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix">TwoWayMediaS3KeyPrefix</a></code> | <code>*string</code> | The key prefix used for inbound RCS media objects in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role">TwoWayMediaS3Role</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled">TwoWayRcsEventsEnabled</a></code> | <code>*[]*string</code> | The list of RCS event types enabled for two-way messaging. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

When set to true the RCS agent can't be deleted. By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#deletion_protection_enabled SmsvoiceRcsAgent#deletion_protection_enabled}

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.optOutListName"></a>

```go
OptOutListName *string
```

- *Type:* *string

The name of the opt-out list associated with the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#opt_out_list_name SmsvoiceRcsAgent#opt_out_list_name}

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.selfManagedOptOutsEnabled"></a>

```go
SelfManagedOptOutsEnabled interface{}
```

- *Type:* interface{}

When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests.

By default this is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#self_managed_opt_outs_enabled SmsvoiceRcsAgent#self_managed_opt_outs_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#tags SmsvoiceRcsAgent#tags}

---

##### `TwoWayChannelArn`<sup>Optional</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelArn"></a>

```go
TwoWayChannelArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_arn SmsvoiceRcsAgent#two_way_channel_arn}

---

##### `TwoWayChannelRole`<sup>Optional</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayChannelRole"></a>

```go
TwoWayChannelRole *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_channel_role SmsvoiceRcsAgent#two_way_channel_role}

---

##### `TwoWayEnabled`<sup>Optional</sup> <a name="TwoWayEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayEnabled"></a>

```go
TwoWayEnabled interface{}
```

- *Type:* interface{}

When set to true two-way messaging is enabled for the RCS agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_enabled SmsvoiceRcsAgent#two_way_enabled}

---

##### `TwoWayMediaS3BucketName`<sup>Optional</sup> <a name="TwoWayMediaS3BucketName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3BucketName"></a>

```go
TwoWayMediaS3BucketName *string
```

- *Type:* *string

The name of the Amazon S3 bucket where inbound RCS media objects are written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_bucket_name SmsvoiceRcsAgent#two_way_media_s3_bucket_name}

---

##### `TwoWayMediaS3KeyPrefix`<sup>Optional</sup> <a name="TwoWayMediaS3KeyPrefix" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3KeyPrefix"></a>

```go
TwoWayMediaS3KeyPrefix *string
```

- *Type:* *string

The key prefix used for inbound RCS media objects in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_key_prefix SmsvoiceRcsAgent#two_way_media_s3_key_prefix}

---

##### `TwoWayMediaS3Role`<sup>Optional</sup> <a name="TwoWayMediaS3Role" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayMediaS3Role"></a>

```go
TwoWayMediaS3Role *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket.

The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_media_s3_role SmsvoiceRcsAgent#two_way_media_s3_role}

---

##### `TwoWayRcsEventsEnabled`<sup>Optional</sup> <a name="TwoWayRcsEventsEnabled" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentConfig.property.twoWayRcsEventsEnabled"></a>

```go
TwoWayRcsEventsEnabled *[]*string
```

- *Type:* *[]*string

The list of RCS event types enabled for two-way messaging.

An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#two_way_rcs_events_enabled SmsvoiceRcsAgent#two_way_rcs_events_enabled}

---

### SmsvoiceRcsAgentTags <a name="SmsvoiceRcsAgentTags" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

&smsvoicercsagent.SmsvoiceRcsAgentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#key SmsvoiceRcsAgent#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/smsvoice_rcs_agent#value SmsvoiceRcsAgent#value}

---

### SmsvoiceRcsAgentTestingAgent <a name="SmsvoiceRcsAgentTestingAgent" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

&smsvoicercsagent.SmsvoiceRcsAgentTestingAgent {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SmsvoiceRcsAgentTagsList <a name="SmsvoiceRcsAgentTagsList" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.NewSmsvoiceRcsAgentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SmsvoiceRcsAgentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get"></a>

```go
func Get(index *f64) SmsvoiceRcsAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceRcsAgentTagsOutputReference <a name="SmsvoiceRcsAgentTagsOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.NewSmsvoiceRcsAgentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SmsvoiceRcsAgentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SmsvoiceRcsAgentTestingAgentOutputReference <a name="SmsvoiceRcsAgentTestingAgentOutputReference" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/smsvoicercsagent"

smsvoicercsagent.NewSmsvoiceRcsAgentTestingAgentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SmsvoiceRcsAgentTestingAgentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId">RegistrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId">TestingAgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus">TestingAgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistrationId`<sup>Required</sup> <a name="RegistrationId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.registrationId"></a>

```go
func RegistrationId() *string
```

- *Type:* *string

---

##### `TestingAgentId`<sup>Required</sup> <a name="TestingAgentId" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentId"></a>

```go
func TestingAgentId() *string
```

- *Type:* *string

---

##### `TestingAgentStatus`<sup>Required</sup> <a name="TestingAgentStatus" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.testingAgentStatus"></a>

```go
func TestingAgentStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgentOutputReference.property.internalValue"></a>

```go
func InternalValue() SmsvoiceRcsAgentTestingAgent
```

- *Type:* <a href="#@cdktn/provider-awscc.smsvoiceRcsAgent.SmsvoiceRcsAgentTestingAgent">SmsvoiceRcsAgentTestingAgent</a>

---



