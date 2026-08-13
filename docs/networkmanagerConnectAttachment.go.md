# `networkmanagerConnectAttachment` Submodule <a name="`networkmanagerConnectAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerConnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerConnectAttachment <a name="NetworkmanagerConnectAttachment" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment awscc_networkmanager_connect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachment(scope Construct, id *string, config NetworkmanagerConnectAttachmentConfig) NetworkmanagerConnectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig">NetworkmanagerConnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange">PutProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange">PutProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName">ResetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange">ResetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange">ResetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel">ResetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions"></a>

```go
func PutOptions(value NetworkmanagerConnectAttachmentOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

---

##### `PutProposedNetworkFunctionGroupChange` <a name="PutProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange"></a>

```go
func PutProposedNetworkFunctionGroupChange(value NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `PutProposedSegmentChange` <a name="PutProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange"></a>

```go
func PutProposedSegmentChange(value NetworkmanagerConnectAttachmentProposedSegmentChange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNetworkFunctionGroupName` <a name="ResetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetNetworkFunctionGroupName"></a>

```go
func ResetNetworkFunctionGroupName()
```

##### `ResetProposedNetworkFunctionGroupChange` <a name="ResetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedNetworkFunctionGroupChange"></a>

```go
func ResetProposedNetworkFunctionGroupChange()
```

##### `ResetProposedSegmentChange` <a name="ResetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetProposedSegmentChange"></a>

```go
func ResetProposedSegmentChange()
```

##### `ResetRoutingPolicyLabel` <a name="ResetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetRoutingPolicyLabel"></a>

```go
func ResetRoutingPolicyLabel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NetworkmanagerConnectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NetworkmanagerConnectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NetworkmanagerConnectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NetworkmanagerConnectAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkmanagerConnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkmanagerConnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkmanagerConnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors">LastModificationErrors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput">EdgeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput">NetworkFunctionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput">OptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput">ProposedNetworkFunctionGroupChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput">ProposedSegmentChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput">TransportAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.lastModificationErrors"></a>

```go
func LastModificationErrors() *[]*string
```

- *Type:* *[]*string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.options"></a>

```go
func Options() NetworkmanagerConnectAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference">NetworkmanagerConnectAttachmentOptionsOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `ProposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChange"></a>

```go
func ProposedNetworkFunctionGroupChange() NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `ProposedSegmentChange`<sup>Required</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChange"></a>

```go
func ProposedSegmentChange() NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference">NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tags"></a>

```go
func Tags() NetworkmanagerConnectAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList">NetworkmanagerConnectAttachmentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkIdInput"></a>

```go
func CoreNetworkIdInput() *string
```

- *Type:* *string

---

##### `EdgeLocationInput`<sup>Optional</sup> <a name="EdgeLocationInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocationInput"></a>

```go
func EdgeLocationInput() *string
```

- *Type:* *string

---

##### `NetworkFunctionGroupNameInput`<sup>Optional</sup> <a name="NetworkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupNameInput"></a>

```go
func NetworkFunctionGroupNameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.optionsInput"></a>

```go
func OptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ProposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="ProposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```go
func ProposedNetworkFunctionGroupChangeInput() interface{}
```

- *Type:* interface{}

---

##### `ProposedSegmentChangeInput`<sup>Optional</sup> <a name="ProposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.proposedSegmentChangeInput"></a>

```go
func ProposedSegmentChangeInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabelInput"></a>

```go
func RoutingPolicyLabelInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransportAttachmentIdInput`<sup>Optional</sup> <a name="TransportAttachmentIdInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentIdInput"></a>

```go
func TransportAttachmentIdInput() *string
```

- *Type:* *string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.coreNetworkId"></a>

```go
func CoreNetworkId() *string
```

- *Type:* *string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.edgeLocation"></a>

```go
func EdgeLocation() *string
```

- *Type:* *string

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.routingPolicyLabel"></a>

```go
func RoutingPolicyLabel() *string
```

- *Type:* *string

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.transportAttachmentId"></a>

```go
func TransportAttachmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerConnectAttachmentConfig <a name="NetworkmanagerConnectAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CoreNetworkId: *string,
	EdgeLocation: *string,
	Options: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions,
	TransportAttachmentId: *string,
	NetworkFunctionGroupName: *string,
	ProposedNetworkFunctionGroupChange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange,
	ProposedSegmentChange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange,
	RoutingPolicyLabel: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>*string</code> | ID of the CoreNetwork that the attachment will be attached to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation">EdgeLocation</a></code> | <code>*string</code> | Edge location of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a></code> | Protocol options for connect attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId">TransportAttachmentId</a></code> | <code>*string</code> | Id of transport attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | The name of the network function group attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>*string</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags for the attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.coreNetworkId"></a>

```go
CoreNetworkId *string
```

- *Type:* *string

ID of the CoreNetwork that the attachment will be attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.edgeLocation"></a>

```go
EdgeLocation *string
```

- *Type:* *string

Edge location of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.options"></a>

```go
Options NetworkmanagerConnectAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions">NetworkmanagerConnectAttachmentOptions</a>

Protocol options for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}

---

##### `TransportAttachmentId`<sup>Required</sup> <a name="TransportAttachmentId" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.transportAttachmentId"></a>

```go
TransportAttachmentId *string
```

- *Type:* *string

Id of transport attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}

---

##### `NetworkFunctionGroupName`<sup>Optional</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.networkFunctionGroupName"></a>

```go
NetworkFunctionGroupName *string
```

- *Type:* *string

The name of the network function group attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `ProposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```go
ProposedNetworkFunctionGroupChange NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#proposed_network_function_group_change NetworkmanagerConnectAttachment#proposed_network_function_group_change}

---

##### `ProposedSegmentChange`<sup>Optional</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.proposedSegmentChange"></a>

```go
ProposedSegmentChange NetworkmanagerConnectAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange">NetworkmanagerConnectAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#proposed_segment_change NetworkmanagerConnectAttachment#proposed_segment_change}

---

##### `RoutingPolicyLabel`<sup>Optional</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.routingPolicyLabel"></a>

```go
RoutingPolicyLabel *string
```

- *Type:* *string

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#routing_policy_label NetworkmanagerConnectAttachment#routing_policy_label}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentOptions <a name="NetworkmanagerConnectAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentOptions {
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol">Protocol</a></code> | <code>*string</code> | Tunnel protocol for connect attachment. |

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptions.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Tunnel protocol for connect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange {
	AttachmentPolicyRuleNumber: *f64,
	NetworkFunctionGroupName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags">Tags</a></code> | <code>interface{}</code> | The key-value tags that changed for the network function group. |

---

##### `AttachmentPolicyRuleNumber`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```go
AttachmentPolicyRuleNumber *f64
```

- *Type:* *f64

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `NetworkFunctionGroupName`<sup>Optional</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```go
NetworkFunctionGroupName *string
```

- *Type:* *string

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#network_function_group_name NetworkmanagerConnectAttachment#network_function_group_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentProposedSegmentChange <a name="NetworkmanagerConnectAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentProposedSegmentChange {
	AttachmentPolicyRuleNumber: *f64,
	SegmentName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName">SegmentName</a></code> | <code>*string</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags">Tags</a></code> | <code>interface{}</code> | The list of key-value tags that changed for the segment. |

---

##### `AttachmentPolicyRuleNumber`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```go
AttachmentPolicyRuleNumber *f64
```

- *Type:* *f64

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#attachment_policy_rule_number NetworkmanagerConnectAttachment#attachment_policy_rule_number}

---

##### `SegmentName`<sup>Optional</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.segmentName"></a>

```go
SegmentName *string
```

- *Type:* *string

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#segment_name NetworkmanagerConnectAttachment#segment_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChange.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The list of key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}

---

### NetworkmanagerConnectAttachmentProposedSegmentChangeTags <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

### NetworkmanagerConnectAttachmentTags <a name="NetworkmanagerConnectAttachmentTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

&networkmanagerconnectattachment.NetworkmanagerConnectAttachmentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#key NetworkmanagerConnectAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkmanager_connect_attachment#value NetworkmanagerConnectAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerConnectAttachmentOptionsOutputReference <a name="NetworkmanagerConnectAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectAttachmentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">ResetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">ResetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachmentPolicyRuleNumber` <a name="ResetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```go
func ResetAttachmentPolicyRuleNumber()
```

##### `ResetNetworkFunctionGroupName` <a name="ResetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```go
func ResetNetworkFunctionGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">AttachmentPolicyRuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">NetworkFunctionGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```go
func Tags() NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `AttachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```go
func AttachmentPolicyRuleNumberInput() *f64
```

- *Type:* *f64

---

##### `NetworkFunctionGroupNameInput`<sup>Optional</sup> <a name="NetworkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```go
func NetworkFunctionGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```go
func NetworkFunctionGroupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```go
func Get(index *f64) NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">ResetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName">ResetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachmentPolicyRuleNumber` <a name="ResetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```go
func ResetAttachmentPolicyRuleNumber()
```

##### `ResetSegmentName` <a name="ResetSegmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```go
func ResetSegmentName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">AttachmentPolicyRuleNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">SegmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```go
func Tags() NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList">NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList</a>

---

##### `AttachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```go
func AttachmentPolicyRuleNumberInput() *f64
```

- *Type:* *f64

---

##### `SegmentNameInput`<sup>Optional</sup> <a name="SegmentNameInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```go
func SegmentNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```go
func AttachmentPolicyRuleNumber() *f64
```

- *Type:* *f64

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedSegmentChangeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get"></a>

```go
func Get(index *f64) NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentTagsList <a name="NetworkmanagerConnectAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerConnectAttachmentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get"></a>

```go
func Get(index *f64) NetworkmanagerConnectAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerConnectAttachmentTagsOutputReference <a name="NetworkmanagerConnectAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerconnectattachment"

networkmanagerconnectattachment.NewNetworkmanagerConnectAttachmentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerConnectAttachmentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerConnectAttachment.NetworkmanagerConnectAttachmentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



