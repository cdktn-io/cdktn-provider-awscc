# `cleanroomsCollaboration` Submodule <a name="`cleanroomsCollaboration` Submodule" id="@cdktn/provider-awscc.cleanroomsCollaboration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsCollaboration <a name="CleanroomsCollaboration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration awscc_cleanrooms_collaboration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaboration(scope Construct, id *string, config CleanroomsCollaborationConfig) CleanroomsCollaboration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig">CleanroomsCollaborationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities">PutCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration">PutCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata">PutDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers">PutMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions">ResetAllowedResultRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine">ResetAnalyticsEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes">ResetAutoApprovedChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities">ResetCreatorMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities">ResetCreatorMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration">ResetCreatorPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata">ResetDataEncryptionMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled">ResetIsMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus">ResetJobLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreatorMlMemberAbilities` <a name="PutCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities"></a>

```go
func PutCreatorMlMemberAbilities(value CleanroomsCollaborationCreatorMlMemberAbilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorMlMemberAbilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

---

##### `PutCreatorPaymentConfiguration` <a name="PutCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration"></a>

```go
func PutCreatorPaymentConfiguration(value CleanroomsCollaborationCreatorPaymentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putCreatorPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

---

##### `PutDataEncryptionMetadata` <a name="PutDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata"></a>

```go
func PutDataEncryptionMetadata(value CleanroomsCollaborationDataEncryptionMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putDataEncryptionMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

---

##### `PutMembers` <a name="PutMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers"></a>

```go
func PutMembers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putMembers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedResultRegions` <a name="ResetAllowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAllowedResultRegions"></a>

```go
func ResetAllowedResultRegions()
```

##### `ResetAnalyticsEngine` <a name="ResetAnalyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAnalyticsEngine"></a>

```go
func ResetAnalyticsEngine()
```

##### `ResetAutoApprovedChangeTypes` <a name="ResetAutoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetAutoApprovedChangeTypes"></a>

```go
func ResetAutoApprovedChangeTypes()
```

##### `ResetCreatorMemberAbilities` <a name="ResetCreatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMemberAbilities"></a>

```go
func ResetCreatorMemberAbilities()
```

##### `ResetCreatorMlMemberAbilities` <a name="ResetCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorMlMemberAbilities"></a>

```go
func ResetCreatorMlMemberAbilities()
```

##### `ResetCreatorPaymentConfiguration` <a name="ResetCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetCreatorPaymentConfiguration"></a>

```go
func ResetCreatorPaymentConfiguration()
```

##### `ResetDataEncryptionMetadata` <a name="ResetDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetDataEncryptionMetadata"></a>

```go
func ResetDataEncryptionMetadata()
```

##### `ResetIsMetricsEnabled` <a name="ResetIsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetIsMetricsEnabled"></a>

```go
func ResetIsMetricsEnabled()
```

##### `ResetJobLogStatus` <a name="ResetJobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetJobLogStatus"></a>

```go
func ResetJobLogStatus()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetMembers"></a>

```go
func ResetMembers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.CleanroomsCollaboration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.CleanroomsCollaboration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.CleanroomsCollaboration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.CleanroomsCollaboration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsCollaboration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsCollaboration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsCollaboration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsCollaboration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities">CreatorMlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration">CreatorPaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata">DataEncryptionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members">Members</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput">AllowedResultRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput">AnalyticsEngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput">AutoApprovedChangeTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput">CreatorDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput">CreatorMemberAbilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput">CreatorMlMemberAbilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput">CreatorPaymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput">DataEncryptionMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput">IsMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput">JobLogStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput">MembersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput">QueryLogStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions">AllowedResultRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine">AnalyticsEngine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes">AutoApprovedChangeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName">CreatorDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities">CreatorMemberAbilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled">IsMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus">JobLogStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `CreatorMlMemberAbilities`<sup>Required</sup> <a name="CreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilities"></a>

```go
func CreatorMlMemberAbilities() CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference">CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference</a>

---

##### `CreatorPaymentConfiguration`<sup>Required</sup> <a name="CreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfiguration"></a>

```go
func CreatorPaymentConfiguration() CleanroomsCollaborationCreatorPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationOutputReference</a>

---

##### `DataEncryptionMetadata`<sup>Required</sup> <a name="DataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadata"></a>

```go
func DataEncryptionMetadata() CleanroomsCollaborationDataEncryptionMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference">CleanroomsCollaborationDataEncryptionMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.members"></a>

```go
func Members() CleanroomsCollaborationMembersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList">CleanroomsCollaborationMembersList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tags"></a>

```go
func Tags() CleanroomsCollaborationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList">CleanroomsCollaborationTagsList</a>

---

##### `AllowedResultRegionsInput`<sup>Optional</sup> <a name="AllowedResultRegionsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegionsInput"></a>

```go
func AllowedResultRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsEngineInput`<sup>Optional</sup> <a name="AnalyticsEngineInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngineInput"></a>

```go
func AnalyticsEngineInput() *string
```

- *Type:* *string

---

##### `AutoApprovedChangeTypesInput`<sup>Optional</sup> <a name="AutoApprovedChangeTypesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypesInput"></a>

```go
func AutoApprovedChangeTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreatorDisplayNameInput`<sup>Optional</sup> <a name="CreatorDisplayNameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayNameInput"></a>

```go
func CreatorDisplayNameInput() *string
```

- *Type:* *string

---

##### `CreatorMemberAbilitiesInput`<sup>Optional</sup> <a name="CreatorMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilitiesInput"></a>

```go
func CreatorMemberAbilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreatorMlMemberAbilitiesInput`<sup>Optional</sup> <a name="CreatorMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMlMemberAbilitiesInput"></a>

```go
func CreatorMlMemberAbilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `CreatorPaymentConfigurationInput`<sup>Optional</sup> <a name="CreatorPaymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorPaymentConfigurationInput"></a>

```go
func CreatorPaymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DataEncryptionMetadataInput`<sup>Optional</sup> <a name="DataEncryptionMetadataInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.dataEncryptionMetadataInput"></a>

```go
func DataEncryptionMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IsMetricsEnabledInput`<sup>Optional</sup> <a name="IsMetricsEnabledInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabledInput"></a>

```go
func IsMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `JobLogStatusInput`<sup>Optional</sup> <a name="JobLogStatusInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatusInput"></a>

```go
func JobLogStatusInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.membersInput"></a>

```go
func MembersInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryLogStatusInput`<sup>Optional</sup> <a name="QueryLogStatusInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatusInput"></a>

```go
func QueryLogStatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedResultRegions`<sup>Required</sup> <a name="AllowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.allowedResultRegions"></a>

```go
func AllowedResultRegions() *[]*string
```

- *Type:* *[]*string

---

##### `AnalyticsEngine`<sup>Required</sup> <a name="AnalyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.analyticsEngine"></a>

```go
func AnalyticsEngine() *string
```

- *Type:* *string

---

##### `AutoApprovedChangeTypes`<sup>Required</sup> <a name="AutoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.autoApprovedChangeTypes"></a>

```go
func AutoApprovedChangeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CreatorDisplayName`<sup>Required</sup> <a name="CreatorDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorDisplayName"></a>

```go
func CreatorDisplayName() *string
```

- *Type:* *string

---

##### `CreatorMemberAbilities`<sup>Required</sup> <a name="CreatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.creatorMemberAbilities"></a>

```go
func CreatorMemberAbilities() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsMetricsEnabled`<sup>Required</sup> <a name="IsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.isMetricsEnabled"></a>

```go
func IsMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `JobLogStatus`<sup>Required</sup> <a name="JobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.jobLogStatus"></a>

```go
func JobLogStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.queryLogStatus"></a>

```go
func QueryLogStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaboration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsCollaborationConfig <a name="CleanroomsCollaborationConfig" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CreatorDisplayName: *string,
	Description: *string,
	Name: *string,
	QueryLogStatus: *string,
	AllowedResultRegions: *[]*string,
	AnalyticsEngine: *string,
	AutoApprovedChangeTypes: *[]*string,
	CreatorMemberAbilities: *[]*string,
	CreatorMlMemberAbilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities,
	CreatorPaymentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration,
	DataEncryptionMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata,
	IsMetricsEnabled: interface{},
	JobLogStatus: *string,
	Members: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName">CreatorDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus">QueryLogStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions">AllowedResultRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine">AnalyticsEngine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes">AutoApprovedChangeTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities">CreatorMemberAbilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities">CreatorMlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration">CreatorPaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata">DataEncryptionMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled">IsMetricsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus">JobLogStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members">Members</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatorDisplayName`<sup>Required</sup> <a name="CreatorDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorDisplayName"></a>

```go
CreatorDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_display_name CleanroomsCollaboration#creator_display_name}.

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#description CleanroomsCollaboration#description}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#name CleanroomsCollaboration#name}.

---

##### `QueryLogStatus`<sup>Required</sup> <a name="QueryLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.queryLogStatus"></a>

```go
QueryLogStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_log_status CleanroomsCollaboration#query_log_status}.

---

##### `AllowedResultRegions`<sup>Optional</sup> <a name="AllowedResultRegions" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.allowedResultRegions"></a>

```go
AllowedResultRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allowed_result_regions CleanroomsCollaboration#allowed_result_regions}.

---

##### `AnalyticsEngine`<sup>Optional</sup> <a name="AnalyticsEngine" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.analyticsEngine"></a>

```go
AnalyticsEngine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#analytics_engine CleanroomsCollaboration#analytics_engine}.

---

##### `AutoApprovedChangeTypes`<sup>Optional</sup> <a name="AutoApprovedChangeTypes" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.autoApprovedChangeTypes"></a>

```go
AutoApprovedChangeTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#auto_approved_change_types CleanroomsCollaboration#auto_approved_change_types}.

---

##### `CreatorMemberAbilities`<sup>Optional</sup> <a name="CreatorMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMemberAbilities"></a>

```go
CreatorMemberAbilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_member_abilities CleanroomsCollaboration#creator_member_abilities}.

---

##### `CreatorMlMemberAbilities`<sup>Optional</sup> <a name="CreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorMlMemberAbilities"></a>

```go
CreatorMlMemberAbilities CleanroomsCollaborationCreatorMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities">CleanroomsCollaborationCreatorMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_ml_member_abilities CleanroomsCollaboration#creator_ml_member_abilities}.

---

##### `CreatorPaymentConfiguration`<sup>Optional</sup> <a name="CreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.creatorPaymentConfiguration"></a>

```go
CreatorPaymentConfiguration CleanroomsCollaborationCreatorPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration">CleanroomsCollaborationCreatorPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#creator_payment_configuration CleanroomsCollaboration#creator_payment_configuration}.

---

##### `DataEncryptionMetadata`<sup>Optional</sup> <a name="DataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.dataEncryptionMetadata"></a>

```go
DataEncryptionMetadata CleanroomsCollaborationDataEncryptionMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata">CleanroomsCollaborationDataEncryptionMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#data_encryption_metadata CleanroomsCollaboration#data_encryption_metadata}.

---

##### `IsMetricsEnabled`<sup>Optional</sup> <a name="IsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.isMetricsEnabled"></a>

```go
IsMetricsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_metrics_enabled CleanroomsCollaboration#is_metrics_enabled}.

---

##### `JobLogStatus`<sup>Optional</sup> <a name="JobLogStatus" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.jobLogStatus"></a>

```go
JobLogStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_log_status CleanroomsCollaboration#job_log_status}.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.members"></a>

```go
Members interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#members CleanroomsCollaboration#members}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#tags CleanroomsCollaboration#tags}

---

### CleanroomsCollaborationCreatorMlMemberAbilities <a name="CleanroomsCollaborationCreatorMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorMlMemberAbilities {
	CustomMlMemberAbilities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities">CustomMlMemberAbilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `CustomMlMemberAbilities`<sup>Optional</sup> <a name="CustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilities.property.customMlMemberAbilities"></a>

```go
CustomMlMemberAbilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationCreatorPaymentConfiguration <a name="CleanroomsCollaborationCreatorPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfiguration {
	JobCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute,
	MachineLearning: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning,
	QueryCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `JobCompute`<sup>Optional</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.jobCompute"></a>

```go
JobCompute CleanroomsCollaborationCreatorPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.machineLearning"></a>

```go
MachineLearning CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `QueryCompute`<sup>Optional</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfiguration.property.queryCompute"></a>

```go
QueryCompute CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationJobCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning {
	ModelInference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference,
	ModelTraining: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining,
	SyntheticDataGeneration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `ModelInference`<sup>Optional</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelInference"></a>

```go
ModelInference CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `ModelTraining`<sup>Optional</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.modelTraining"></a>

```go
ModelTraining CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `SyntheticDataGeneration`<sup>Optional</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```go
SyntheticDataGeneration CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationDataEncryptionMetadata <a name="CleanroomsCollaborationDataEncryptionMetadata" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationDataEncryptionMetadata {
	AllowCleartext: interface{},
	AllowDuplicates: interface{},
	AllowJoinsOnColumnsWithDifferentNames: interface{},
	PreserveNulls: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext">AllowCleartext</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates">AllowDuplicates</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames">AllowJoinsOnColumnsWithDifferentNames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls">PreserveNulls</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}. |

---

##### `AllowCleartext`<sup>Optional</sup> <a name="AllowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowCleartext"></a>

```go
AllowCleartext interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_cleartext CleanroomsCollaboration#allow_cleartext}.

---

##### `AllowDuplicates`<sup>Optional</sup> <a name="AllowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowDuplicates"></a>

```go
AllowDuplicates interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_duplicates CleanroomsCollaboration#allow_duplicates}.

---

##### `AllowJoinsOnColumnsWithDifferentNames`<sup>Optional</sup> <a name="AllowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.allowJoinsOnColumnsWithDifferentNames"></a>

```go
AllowJoinsOnColumnsWithDifferentNames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#allow_joins_on_columns_with_different_names CleanroomsCollaboration#allow_joins_on_columns_with_different_names}.

---

##### `PreserveNulls`<sup>Optional</sup> <a name="PreserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadata.property.preserveNulls"></a>

```go
PreserveNulls interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#preserve_nulls CleanroomsCollaboration#preserve_nulls}.

---

### CleanroomsCollaborationMembers <a name="CleanroomsCollaborationMembers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembers {
	AccountId: *string,
	DisplayName: *string,
	MemberAbilities: *[]*string,
	MlMemberAbilities: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities,
	PaymentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities">MemberAbilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities">MlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#account_id CleanroomsCollaboration#account_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#display_name CleanroomsCollaboration#display_name}.

---

##### `MemberAbilities`<sup>Optional</sup> <a name="MemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.memberAbilities"></a>

```go
MemberAbilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#member_abilities CleanroomsCollaboration#member_abilities}.

---

##### `MlMemberAbilities`<sup>Optional</sup> <a name="MlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.mlMemberAbilities"></a>

```go
MlMemberAbilities CleanroomsCollaborationMembersMlMemberAbilities
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#ml_member_abilities CleanroomsCollaboration#ml_member_abilities}.

---

##### `PaymentConfiguration`<sup>Optional</sup> <a name="PaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembers.property.paymentConfiguration"></a>

```go
PaymentConfiguration CleanroomsCollaborationMembersPaymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#payment_configuration CleanroomsCollaboration#payment_configuration}.

---

### CleanroomsCollaborationMembersMlMemberAbilities <a name="CleanroomsCollaborationMembersMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersMlMemberAbilities {
	CustomMlMemberAbilities: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities">CustomMlMemberAbilities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}. |

---

##### `CustomMlMemberAbilities`<sup>Optional</sup> <a name="CustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities.property.customMlMemberAbilities"></a>

```go
CustomMlMemberAbilities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#custom_ml_member_abilities CleanroomsCollaboration#custom_ml_member_abilities}.

---

### CleanroomsCollaborationMembersPaymentConfiguration <a name="CleanroomsCollaborationMembersPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfiguration {
	JobCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute,
	MachineLearning: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning,
	QueryCompute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}. |

---

##### `JobCompute`<sup>Optional</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.jobCompute"></a>

```go
JobCompute CleanroomsCollaborationMembersPaymentConfigurationJobCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#job_compute CleanroomsCollaboration#job_compute}.

---

##### `MachineLearning`<sup>Optional</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.machineLearning"></a>

```go
MachineLearning CleanroomsCollaborationMembersPaymentConfigurationMachineLearning
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#machine_learning CleanroomsCollaboration#machine_learning}.

---

##### `QueryCompute`<sup>Optional</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration.property.queryCompute"></a>

```go
QueryCompute CleanroomsCollaborationMembersPaymentConfigurationQueryCompute
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#query_compute CleanroomsCollaboration#query_compute}.

---

### CleanroomsCollaborationMembersPaymentConfigurationJobCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearning <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning {
	ModelInference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference,
	ModelTraining: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining,
	SyntheticDataGeneration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}. |

---

##### `ModelInference`<sup>Optional</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelInference"></a>

```go
ModelInference CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_inference CleanroomsCollaboration#model_inference}.

---

##### `ModelTraining`<sup>Optional</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.modelTraining"></a>

```go
ModelTraining CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#model_training CleanroomsCollaboration#model_training}.

---

##### `SyntheticDataGeneration`<sup>Optional</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```go
SyntheticDataGeneration CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#synthetic_data_generation CleanroomsCollaboration#synthetic_data_generation}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationMembersPaymentConfigurationQueryCompute <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute {
	IsResponsible: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}. |

---

##### `IsResponsible`<sup>Optional</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute.property.isResponsible"></a>

```go
IsResponsible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#is_responsible CleanroomsCollaboration#is_responsible}.

---

### CleanroomsCollaborationTags <a name="CleanroomsCollaborationTags" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

&cleanroomscollaboration.CleanroomsCollaborationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#key CleanroomsCollaboration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cleanrooms_collaboration#value CleanroomsCollaboration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">ResetCustomMlMemberAbilities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomMlMemberAbilities` <a name="ResetCustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```go
func ResetCustomMlMemberAbilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">CustomMlMemberAbilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">CustomMlMemberAbilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomMlMemberAbilitiesInput`<sup>Optional</sup> <a name="CustomMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```go
func CustomMlMemberAbilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomMlMemberAbilities`<sup>Required</sup> <a name="CustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```go
func CustomMlMemberAbilities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorMlMemberAbilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference">PutModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining">PutModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">PutSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference">ResetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining">ResetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">ResetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelInference` <a name="PutModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```go
func PutModelInference(value CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInference</a>

---

##### `PutModelTraining` <a name="PutModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```go
func PutModelTraining(value CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTraining</a>

---

##### `PutSyntheticDataGeneration` <a name="PutSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```go
func PutSyntheticDataGeneration(value CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `ResetModelInference` <a name="ResetModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```go
func ResetModelInference()
```

##### `ResetModelTraining` <a name="ResetModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```go
func ResetModelTraining()
```

##### `ResetSyntheticDataGeneration` <a name="ResetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```go
func ResetSyntheticDataGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">ModelInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">ModelTrainingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">SyntheticDataGenerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInference`<sup>Required</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```go
func ModelInference() CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `ModelTraining`<sup>Required</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```go
func ModelTraining() CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `SyntheticDataGeneration`<sup>Required</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```go
func SyntheticDataGeneration() CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `ModelInferenceInput`<sup>Optional</sup> <a name="ModelInferenceInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```go
func ModelInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `ModelTrainingInput`<sup>Optional</sup> <a name="ModelTrainingInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```go
func ModelTrainingInput() interface{}
```

- *Type:* interface{}

---

##### `SyntheticDataGenerationInput`<sup>Optional</sup> <a name="SyntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```go
func SyntheticDataGenerationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute">PutJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning">PutMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute">PutQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute">ResetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning">ResetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute">ResetQueryCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobCompute` <a name="PutJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute"></a>

```go
func PutJobCompute(value CleanroomsCollaborationCreatorPaymentConfigurationJobCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobCompute">CleanroomsCollaborationCreatorPaymentConfigurationJobCompute</a>

---

##### `PutMachineLearning` <a name="PutMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning"></a>

```go
func PutMachineLearning(value CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearning</a>

---

##### `PutQueryCompute` <a name="PutQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute"></a>

```go
func PutQueryCompute(value CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute">CleanroomsCollaborationCreatorPaymentConfigurationQueryCompute</a>

---

##### `ResetJobCompute` <a name="ResetJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetJobCompute"></a>

```go
func ResetJobCompute()
```

##### `ResetMachineLearning` <a name="ResetMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetMachineLearning"></a>

```go
func ResetMachineLearning()
```

##### `ResetQueryCompute` <a name="ResetQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.resetQueryCompute"></a>

```go
func ResetQueryCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput">JobComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput">MachineLearningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput">QueryComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobCompute`<sup>Required</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobCompute"></a>

```go
func JobCompute() CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationJobComputeOutputReference</a>

---

##### `MachineLearning`<sup>Required</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearning"></a>

```go
func MachineLearning() CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationMachineLearningOutputReference</a>

---

##### `QueryCompute`<sup>Required</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryCompute"></a>

```go
func QueryCompute() CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference</a>

---

##### `JobComputeInput`<sup>Optional</sup> <a name="JobComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```go
func JobComputeInput() interface{}
```

- *Type:* interface{}

---

##### `MachineLearningInput`<sup>Optional</sup> <a name="MachineLearningInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```go
func MachineLearningInput() interface{}
```

- *Type:* interface{}

---

##### `QueryComputeInput`<sup>Optional</sup> <a name="QueryComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```go
func QueryComputeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationCreatorPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationDataEncryptionMetadataOutputReference <a name="CleanroomsCollaborationDataEncryptionMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationDataEncryptionMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationDataEncryptionMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext">ResetAllowCleartext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates">ResetAllowDuplicates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames">ResetAllowJoinsOnColumnsWithDifferentNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls">ResetPreserveNulls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCleartext` <a name="ResetAllowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowCleartext"></a>

```go
func ResetAllowCleartext()
```

##### `ResetAllowDuplicates` <a name="ResetAllowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowDuplicates"></a>

```go
func ResetAllowDuplicates()
```

##### `ResetAllowJoinsOnColumnsWithDifferentNames` <a name="ResetAllowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetAllowJoinsOnColumnsWithDifferentNames"></a>

```go
func ResetAllowJoinsOnColumnsWithDifferentNames()
```

##### `ResetPreserveNulls` <a name="ResetPreserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.resetPreserveNulls"></a>

```go
func ResetPreserveNulls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput">AllowCleartextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput">AllowDuplicatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput">AllowJoinsOnColumnsWithDifferentNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput">PreserveNullsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext">AllowCleartext</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates">AllowDuplicates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames">AllowJoinsOnColumnsWithDifferentNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls">PreserveNulls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCleartextInput`<sup>Optional</sup> <a name="AllowCleartextInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartextInput"></a>

```go
func AllowCleartextInput() interface{}
```

- *Type:* interface{}

---

##### `AllowDuplicatesInput`<sup>Optional</sup> <a name="AllowDuplicatesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicatesInput"></a>

```go
func AllowDuplicatesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowJoinsOnColumnsWithDifferentNamesInput`<sup>Optional</sup> <a name="AllowJoinsOnColumnsWithDifferentNamesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNamesInput"></a>

```go
func AllowJoinsOnColumnsWithDifferentNamesInput() interface{}
```

- *Type:* interface{}

---

##### `PreserveNullsInput`<sup>Optional</sup> <a name="PreserveNullsInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNullsInput"></a>

```go
func PreserveNullsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCleartext`<sup>Required</sup> <a name="AllowCleartext" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowCleartext"></a>

```go
func AllowCleartext() interface{}
```

- *Type:* interface{}

---

##### `AllowDuplicates`<sup>Required</sup> <a name="AllowDuplicates" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowDuplicates"></a>

```go
func AllowDuplicates() interface{}
```

- *Type:* interface{}

---

##### `AllowJoinsOnColumnsWithDifferentNames`<sup>Required</sup> <a name="AllowJoinsOnColumnsWithDifferentNames" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.allowJoinsOnColumnsWithDifferentNames"></a>

```go
func AllowJoinsOnColumnsWithDifferentNames() interface{}
```

- *Type:* interface{}

---

##### `PreserveNulls`<sup>Required</sup> <a name="PreserveNulls" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.preserveNulls"></a>

```go
func PreserveNulls() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationDataEncryptionMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersList <a name="CleanroomsCollaborationMembersList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsCollaborationMembersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get"></a>

```go
func Get(index *f64) CleanroomsCollaborationMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference <a name="CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersMlMemberAbilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities">ResetCustomMlMemberAbilities</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomMlMemberAbilities` <a name="ResetCustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.resetCustomMlMemberAbilities"></a>

```go
func ResetCustomMlMemberAbilities()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput">CustomMlMemberAbilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities">CustomMlMemberAbilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomMlMemberAbilitiesInput`<sup>Optional</sup> <a name="CustomMlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilitiesInput"></a>

```go
func CustomMlMemberAbilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomMlMemberAbilities`<sup>Required</sup> <a name="CustomMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.customMlMemberAbilities"></a>

```go
func CustomMlMemberAbilities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersOutputReference <a name="CleanroomsCollaborationMembersOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsCollaborationMembersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities">PutMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration">PutPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities">ResetMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities">ResetMlMemberAbilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration">ResetPaymentConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMlMemberAbilities` <a name="PutMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities"></a>

```go
func PutMlMemberAbilities(value CleanroomsCollaborationMembersMlMemberAbilities)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putMlMemberAbilities.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilities">CleanroomsCollaborationMembersMlMemberAbilities</a>

---

##### `PutPaymentConfiguration` <a name="PutPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration"></a>

```go
func PutPaymentConfiguration(value CleanroomsCollaborationMembersPaymentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.putPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfiguration">CleanroomsCollaborationMembersPaymentConfiguration</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetMemberAbilities` <a name="ResetMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMemberAbilities"></a>

```go
func ResetMemberAbilities()
```

##### `ResetMlMemberAbilities` <a name="ResetMlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetMlMemberAbilities"></a>

```go
func ResetMlMemberAbilities()
```

##### `ResetPaymentConfiguration` <a name="ResetPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.resetPaymentConfiguration"></a>

```go
func ResetPaymentConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities">MlMemberAbilities</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration">PaymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput">MemberAbilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput">MlMemberAbilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput">PaymentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities">MemberAbilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MlMemberAbilities`<sup>Required</sup> <a name="MlMemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilities"></a>

```go
func MlMemberAbilities() CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference">CleanroomsCollaborationMembersMlMemberAbilitiesOutputReference</a>

---

##### `PaymentConfiguration`<sup>Required</sup> <a name="PaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfiguration"></a>

```go
func PaymentConfiguration() CleanroomsCollaborationMembersPaymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `MemberAbilitiesInput`<sup>Optional</sup> <a name="MemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilitiesInput"></a>

```go
func MemberAbilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MlMemberAbilitiesInput`<sup>Optional</sup> <a name="MlMemberAbilitiesInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.mlMemberAbilitiesInput"></a>

```go
func MlMemberAbilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `PaymentConfigurationInput`<sup>Optional</sup> <a name="PaymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.paymentConfigurationInput"></a>

```go
func PaymentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MemberAbilities`<sup>Required</sup> <a name="MemberAbilities" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.memberAbilities"></a>

```go
func MemberAbilities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference">PutModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining">PutModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">PutSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference">ResetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining">ResetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">ResetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutModelInference` <a name="PutModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```go
func PutModelInference(value CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInference</a>

---

##### `PutModelTraining` <a name="PutModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```go
func PutModelTraining(value CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTraining</a>

---

##### `PutSyntheticDataGeneration` <a name="PutSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```go
func PutSyntheticDataGeneration(value CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `ResetModelInference` <a name="ResetModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```go
func ResetModelInference()
```

##### `ResetModelTraining` <a name="ResetModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```go
func ResetModelTraining()
```

##### `ResetSyntheticDataGeneration` <a name="ResetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```go
func ResetSyntheticDataGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference">ModelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining">ModelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">SyntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">ModelInferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">ModelTrainingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">SyntheticDataGenerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelInference`<sup>Required</sup> <a name="ModelInference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```go
func ModelInference() CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `ModelTraining`<sup>Required</sup> <a name="ModelTraining" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```go
func ModelTraining() CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `SyntheticDataGeneration`<sup>Required</sup> <a name="SyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```go
func SyntheticDataGeneration() CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `ModelInferenceInput`<sup>Optional</sup> <a name="ModelInferenceInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```go
func ModelInferenceInput() interface{}
```

- *Type:* interface{}

---

##### `ModelTrainingInput`<sup>Optional</sup> <a name="ModelTrainingInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```go
func ModelTrainingInput() interface{}
```

- *Type:* interface{}

---

##### `SyntheticDataGenerationInput`<sup>Optional</sup> <a name="SyntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```go
func SyntheticDataGenerationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute">PutJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning">PutMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute">PutQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute">ResetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning">ResetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute">ResetQueryCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobCompute` <a name="PutJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute"></a>

```go
func PutJobCompute(value CleanroomsCollaborationMembersPaymentConfigurationJobCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobCompute">CleanroomsCollaborationMembersPaymentConfigurationJobCompute</a>

---

##### `PutMachineLearning` <a name="PutMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning"></a>

```go
func PutMachineLearning(value CleanroomsCollaborationMembersPaymentConfigurationMachineLearning)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearning">CleanroomsCollaborationMembersPaymentConfigurationMachineLearning</a>

---

##### `PutQueryCompute` <a name="PutQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute"></a>

```go
func PutQueryCompute(value CleanroomsCollaborationMembersPaymentConfigurationQueryCompute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryCompute">CleanroomsCollaborationMembersPaymentConfigurationQueryCompute</a>

---

##### `ResetJobCompute` <a name="ResetJobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetJobCompute"></a>

```go
func ResetJobCompute()
```

##### `ResetMachineLearning` <a name="ResetMachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetMachineLearning"></a>

```go
func ResetMachineLearning()
```

##### `ResetQueryCompute` <a name="ResetQueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.resetQueryCompute"></a>

```go
func ResetQueryCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute">JobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning">MachineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute">QueryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput">JobComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput">MachineLearningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput">QueryComputeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobCompute`<sup>Required</sup> <a name="JobCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobCompute"></a>

```go
func JobCompute() CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationJobComputeOutputReference</a>

---

##### `MachineLearning`<sup>Required</sup> <a name="MachineLearning" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearning"></a>

```go
func MachineLearning() CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference">CleanroomsCollaborationMembersPaymentConfigurationMachineLearningOutputReference</a>

---

##### `QueryCompute`<sup>Required</sup> <a name="QueryCompute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryCompute"></a>

```go
func QueryCompute() CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference">CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference</a>

---

##### `JobComputeInput`<sup>Optional</sup> <a name="JobComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```go
func JobComputeInput() interface{}
```

- *Type:* interface{}

---

##### `MachineLearningInput`<sup>Optional</sup> <a name="MachineLearningInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```go
func MachineLearningInput() interface{}
```

- *Type:* interface{}

---

##### `QueryComputeInput`<sup>Optional</sup> <a name="QueryComputeInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```go
func QueryComputeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">ResetIsResponsible</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsResponsible` <a name="ResetIsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```go
func ResetIsResponsible()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">IsResponsibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible">IsResponsible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponsibleInput`<sup>Optional</sup> <a name="IsResponsibleInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```go
func IsResponsibleInput() interface{}
```

- *Type:* interface{}

---

##### `IsResponsible`<sup>Required</sup> <a name="IsResponsible" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```go
func IsResponsible() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationMembersPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationTagsList <a name="CleanroomsCollaborationTagsList" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsCollaborationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get"></a>

```go
func Get(index *f64) CleanroomsCollaborationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsCollaborationTagsOutputReference <a name="CleanroomsCollaborationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomscollaboration"

cleanroomscollaboration.NewCleanroomsCollaborationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsCollaborationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsCollaboration.CleanroomsCollaborationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



