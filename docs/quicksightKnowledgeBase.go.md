# `quicksightKnowledgeBase` Submodule <a name="`quicksightKnowledgeBase` Submodule" id="@cdktn/provider-awscc.quicksightKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightKnowledgeBase <a name="QuicksightKnowledgeBase" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base awscc_quicksight_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBase(scope Construct, id *string, config QuicksightKnowledgeBaseConfig) QuicksightKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig">QuicksightKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig">QuicksightKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration">PutAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration">PutKnowledgeBaseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration">PutMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration">ResetAccessControlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures">ResetIsEmailNotificationOptedForIngestionFailures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration">ResetMediaExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn">ResetPrimaryOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessControlConfiguration` <a name="PutAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration"></a>

```go
func PutAccessControlConfiguration(value QuicksightKnowledgeBaseAccessControlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putAccessControlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

---

##### `PutKnowledgeBaseConfiguration` <a name="PutKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration"></a>

```go
func PutKnowledgeBaseConfiguration(value QuicksightKnowledgeBaseKnowledgeBaseConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putKnowledgeBaseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

---

##### `PutMediaExtractionConfiguration` <a name="PutMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration"></a>

```go
func PutMediaExtractionConfiguration(value QuicksightKnowledgeBaseMediaExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putMediaExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessControlConfiguration` <a name="ResetAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetAccessControlConfiguration"></a>

```go
func ResetAccessControlConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIsEmailNotificationOptedForIngestionFailures` <a name="ResetIsEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetIsEmailNotificationOptedForIngestionFailures"></a>

```go
func ResetIsEmailNotificationOptedForIngestionFailures()
```

##### `ResetMediaExtractionConfiguration` <a name="ResetMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetMediaExtractionConfiguration"></a>

```go
func ResetMediaExtractionConfiguration()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrimaryOwnerArn` <a name="ResetPrimaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetPrimaryOwnerArn"></a>

```go
func ResetPrimaryOwnerArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.QuicksightKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.QuicksightKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.QuicksightKnowledgeBase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.QuicksightKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration">AccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount">DocumentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration">KnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes">KnowledgeBaseSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername">PrimaryOwnerUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput">AccessControlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput">IsEmailNotificationOptedForIngestionFailuresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput">KnowledgeBaseConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput">MediaExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput">PrimaryOwnerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures">IsEmailNotificationOptedForIngestionFailures</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn">PrimaryOwnerArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControlConfiguration`<sup>Required</sup> <a name="AccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfiguration"></a>

```go
func AccessControlConfiguration() QuicksightKnowledgeBaseAccessControlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference">QuicksightKnowledgeBaseAccessControlConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DocumentCount`<sup>Required</sup> <a name="DocumentCount" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.documentCount"></a>

```go
func DocumentCount() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseArn"></a>

```go
func KnowledgeBaseArn() *string
```

- *Type:* *string

---

##### `KnowledgeBaseConfiguration`<sup>Required</sup> <a name="KnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfiguration"></a>

```go
func KnowledgeBaseConfiguration() QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference</a>

---

##### `KnowledgeBaseSizeBytes`<sup>Required</sup> <a name="KnowledgeBaseSizeBytes" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseSizeBytes"></a>

```go
func KnowledgeBaseSizeBytes() *f64
```

- *Type:* *f64

---

##### `MediaExtractionConfiguration`<sup>Required</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfiguration"></a>

```go
func MediaExtractionConfiguration() QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissions"></a>

```go
func Permissions() QuicksightKnowledgeBasePermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList">QuicksightKnowledgeBasePermissionsList</a>

---

##### `PrimaryOwnerUsername`<sup>Required</sup> <a name="PrimaryOwnerUsername" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerUsername"></a>

```go
func PrimaryOwnerUsername() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tags"></a>

```go
func Tags() QuicksightKnowledgeBaseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList">QuicksightKnowledgeBaseTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccessControlConfigurationInput`<sup>Optional</sup> <a name="AccessControlConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.accessControlConfigurationInput"></a>

```go
func AccessControlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArnInput"></a>

```go
func DataSourceArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IsEmailNotificationOptedForIngestionFailuresInput`<sup>Optional</sup> <a name="IsEmailNotificationOptedForIngestionFailuresInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailuresInput"></a>

```go
func IsEmailNotificationOptedForIngestionFailuresInput() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseConfigurationInput`<sup>Optional</sup> <a name="KnowledgeBaseConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseConfigurationInput"></a>

```go
func KnowledgeBaseConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `MediaExtractionConfigurationInput`<sup>Optional</sup> <a name="MediaExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.mediaExtractionConfigurationInput"></a>

```go
func MediaExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryOwnerArnInput`<sup>Optional</sup> <a name="PrimaryOwnerArnInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArnInput"></a>

```go
func PrimaryOwnerArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsEmailNotificationOptedForIngestionFailures`<sup>Required</sup> <a name="IsEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.isEmailNotificationOptedForIngestionFailures"></a>

```go
func IsEmailNotificationOptedForIngestionFailures() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrimaryOwnerArn`<sup>Required</sup> <a name="PrimaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.primaryOwnerArn"></a>

```go
func PrimaryOwnerArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightKnowledgeBaseAccessControlConfiguration <a name="QuicksightKnowledgeBaseAccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseAccessControlConfiguration {
	IsAclEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled">IsAclEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}. |

---

##### `IsAclEnabled`<sup>Optional</sup> <a name="IsAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration.property.isAclEnabled"></a>

```go
IsAclEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_acl_enabled QuicksightKnowledgeBase#is_acl_enabled}.

---

### QuicksightKnowledgeBaseConfig <a name="QuicksightKnowledgeBaseConfig" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	DataSourceArn: *string,
	KnowledgeBaseConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration,
	KnowledgeBaseId: *string,
	Name: *string,
	AccessControlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration,
	Description: *string,
	IsEmailNotificationOptedForIngestionFailures: interface{},
	MediaExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration,
	Permissions: interface{},
	PrimaryOwnerArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration">KnowledgeBaseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration">AccessControlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures">IsEmailNotificationOptedForIngestionFailures</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration">MediaExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn">PrimaryOwnerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#aws_account_id QuicksightKnowledgeBase#aws_account_id}.

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.dataSourceArn"></a>

```go
DataSourceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#data_source_arn QuicksightKnowledgeBase#data_source_arn}.

---

##### `KnowledgeBaseConfiguration`<sup>Required</sup> <a name="KnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseConfiguration"></a>

```go
KnowledgeBaseConfiguration QuicksightKnowledgeBaseKnowledgeBaseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_configuration QuicksightKnowledgeBase#knowledge_base_configuration}.

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#knowledge_base_id QuicksightKnowledgeBase#knowledge_base_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#name QuicksightKnowledgeBase#name}.

---

##### `AccessControlConfiguration`<sup>Optional</sup> <a name="AccessControlConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.accessControlConfiguration"></a>

```go
AccessControlConfiguration QuicksightKnowledgeBaseAccessControlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfiguration">QuicksightKnowledgeBaseAccessControlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#access_control_configuration QuicksightKnowledgeBase#access_control_configuration}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#description QuicksightKnowledgeBase#description}.

---

##### `IsEmailNotificationOptedForIngestionFailures`<sup>Optional</sup> <a name="IsEmailNotificationOptedForIngestionFailures" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.isEmailNotificationOptedForIngestionFailures"></a>

```go
IsEmailNotificationOptedForIngestionFailures interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#is_email_notification_opted_for_ingestion_failures QuicksightKnowledgeBase#is_email_notification_opted_for_ingestion_failures}.

---

##### `MediaExtractionConfiguration`<sup>Optional</sup> <a name="MediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.mediaExtractionConfiguration"></a>

```go
MediaExtractionConfiguration QuicksightKnowledgeBaseMediaExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#media_extraction_configuration QuicksightKnowledgeBase#media_extraction_configuration}.

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#permissions QuicksightKnowledgeBase#permissions}.

---

##### `PrimaryOwnerArn`<sup>Optional</sup> <a name="PrimaryOwnerArn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.primaryOwnerArn"></a>

```go
PrimaryOwnerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#primary_owner_arn QuicksightKnowledgeBase#primary_owner_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#tags QuicksightKnowledgeBase#tags}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration {
	TemplateConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}. |

---

##### `TemplateConfiguration`<sup>Optional</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfiguration.property.templateConfiguration"></a>

```go
TemplateConfiguration QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template_configuration QuicksightKnowledgeBase#template_configuration}.

---

### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration {
	Template: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}. |

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#template QuicksightKnowledgeBase#template}.

---

### QuicksightKnowledgeBaseMediaExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseMediaExtractionConfiguration {
	AudioExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration,
	ImageExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration,
	VideoExtractionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}. |

---

##### `AudioExtractionConfiguration`<sup>Optional</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.audioExtractionConfiguration"></a>

```go
AudioExtractionConfiguration QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_configuration QuicksightKnowledgeBase#audio_extraction_configuration}.

---

##### `ImageExtractionConfiguration`<sup>Optional</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.imageExtractionConfiguration"></a>

```go
ImageExtractionConfiguration QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_configuration QuicksightKnowledgeBase#image_extraction_configuration}.

---

##### `VideoExtractionConfiguration`<sup>Optional</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfiguration.property.videoExtractionConfiguration"></a>

```go
VideoExtractionConfiguration QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_configuration QuicksightKnowledgeBase#video_extraction_configuration}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration {
	AudioExtractionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}. |

---

##### `AudioExtractionStatus`<sup>Optional</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration.property.audioExtractionStatus"></a>

```go
AudioExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#audio_extraction_status QuicksightKnowledgeBase#audio_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration {
	ImageExtractionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}. |

---

##### `ImageExtractionStatus`<sup>Optional</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration.property.imageExtractionStatus"></a>

```go
ImageExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#image_extraction_status QuicksightKnowledgeBase#image_extraction_status}.

---

### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration {
	VideoExtractionStatus: *string,
	VideoExtractionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType">VideoExtractionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}. |

---

##### `VideoExtractionStatus`<sup>Optional</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionStatus"></a>

```go
VideoExtractionStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_status QuicksightKnowledgeBase#video_extraction_status}.

---

##### `VideoExtractionType`<sup>Optional</sup> <a name="VideoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration.property.videoExtractionType"></a>

```go
VideoExtractionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#video_extraction_type QuicksightKnowledgeBase#video_extraction_type}.

---

### QuicksightKnowledgeBasePermissions <a name="QuicksightKnowledgeBasePermissions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBasePermissions {
	Actions: *[]*string,
	Principal: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal">Principal</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the principal. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#actions QuicksightKnowledgeBase#actions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon Quick user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Quick user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#principal QuicksightKnowledgeBase#principal}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissions.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#resource QuicksightKnowledgeBase#resource}.

---

### QuicksightKnowledgeBaseTags <a name="QuicksightKnowledgeBaseTags" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

&quicksightknowledgebase.QuicksightKnowledgeBaseTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#key QuicksightKnowledgeBase#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_knowledge_base#value QuicksightKnowledgeBase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightKnowledgeBaseAccessControlConfigurationOutputReference <a name="QuicksightKnowledgeBaseAccessControlConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseAccessControlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseAccessControlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled">ResetIsAclEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsAclEnabled` <a name="ResetIsAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.resetIsAclEnabled"></a>

```go
func ResetIsAclEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput">IsAclEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled">IsAclEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsAclEnabledInput`<sup>Optional</sup> <a name="IsAclEnabledInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabledInput"></a>

```go
func IsAclEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsAclEnabled`<sup>Required</sup> <a name="IsAclEnabled" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.isAclEnabled"></a>

```go
func IsAclEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseAccessControlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration">PutTemplateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration">ResetTemplateConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTemplateConfiguration` <a name="PutTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration"></a>

```go
func PutTemplateConfiguration(value QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.putTemplateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfiguration</a>

---

##### `ResetTemplateConfiguration` <a name="ResetTemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.resetTemplateConfiguration"></a>

```go
func ResetTemplateConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration">TemplateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput">TemplateConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateConfiguration`<sup>Required</sup> <a name="TemplateConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfiguration"></a>

```go
func TemplateConfiguration() QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference">QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference</a>

---

##### `TemplateConfigurationInput`<sup>Optional</sup> <a name="TemplateConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.templateConfigurationInput"></a>

```go
func TemplateConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference <a name="QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseKnowledgeBaseConfigurationTemplateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus">ResetAudioExtractionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioExtractionStatus` <a name="ResetAudioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.resetAudioExtractionStatus"></a>

```go
func ResetAudioExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput">AudioExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus">AudioExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionStatusInput`<sup>Optional</sup> <a name="AudioExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatusInput"></a>

```go
func AudioExtractionStatusInput() *string
```

- *Type:* *string

---

##### `AudioExtractionStatus`<sup>Required</sup> <a name="AudioExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.audioExtractionStatus"></a>

```go
func AudioExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus">ResetImageExtractionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageExtractionStatus` <a name="ResetImageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.resetImageExtractionStatus"></a>

```go
func ResetImageExtractionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput">ImageExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus">ImageExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageExtractionStatusInput`<sup>Optional</sup> <a name="ImageExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatusInput"></a>

```go
func ImageExtractionStatusInput() *string
```

- *Type:* *string

---

##### `ImageExtractionStatus`<sup>Required</sup> <a name="ImageExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.imageExtractionStatus"></a>

```go
func ImageExtractionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration">PutAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration">PutImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration">PutVideoExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration">ResetAudioExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration">ResetImageExtractionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration">ResetVideoExtractionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioExtractionConfiguration` <a name="PutAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration"></a>

```go
func PutAudioExtractionConfiguration(value QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putAudioExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfiguration</a>

---

##### `PutImageExtractionConfiguration` <a name="PutImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration"></a>

```go
func PutImageExtractionConfiguration(value QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putImageExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfiguration</a>

---

##### `PutVideoExtractionConfiguration` <a name="PutVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration"></a>

```go
func PutVideoExtractionConfiguration(value QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.putVideoExtractionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfiguration</a>

---

##### `ResetAudioExtractionConfiguration` <a name="ResetAudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetAudioExtractionConfiguration"></a>

```go
func ResetAudioExtractionConfiguration()
```

##### `ResetImageExtractionConfiguration` <a name="ResetImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetImageExtractionConfiguration"></a>

```go
func ResetImageExtractionConfiguration()
```

##### `ResetVideoExtractionConfiguration` <a name="ResetVideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.resetVideoExtractionConfiguration"></a>

```go
func ResetVideoExtractionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration">AudioExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration">ImageExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration">VideoExtractionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput">AudioExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput">ImageExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput">VideoExtractionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AudioExtractionConfiguration`<sup>Required</sup> <a name="AudioExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfiguration"></a>

```go
func AudioExtractionConfiguration() QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationAudioExtractionConfigurationOutputReference</a>

---

##### `ImageExtractionConfiguration`<sup>Required</sup> <a name="ImageExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfiguration"></a>

```go
func ImageExtractionConfiguration() QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationImageExtractionConfigurationOutputReference</a>

---

##### `VideoExtractionConfiguration`<sup>Required</sup> <a name="VideoExtractionConfiguration" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfiguration"></a>

```go
func VideoExtractionConfiguration() QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference">QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference</a>

---

##### `AudioExtractionConfigurationInput`<sup>Optional</sup> <a name="AudioExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.audioExtractionConfigurationInput"></a>

```go
func AudioExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageExtractionConfigurationInput`<sup>Optional</sup> <a name="ImageExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.imageExtractionConfigurationInput"></a>

```go
func ImageExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `VideoExtractionConfigurationInput`<sup>Optional</sup> <a name="VideoExtractionConfigurationInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.videoExtractionConfigurationInput"></a>

```go
func VideoExtractionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference <a name="QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus">ResetVideoExtractionStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType">ResetVideoExtractionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVideoExtractionStatus` <a name="ResetVideoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionStatus"></a>

```go
func ResetVideoExtractionStatus()
```

##### `ResetVideoExtractionType` <a name="ResetVideoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.resetVideoExtractionType"></a>

```go
func ResetVideoExtractionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput">VideoExtractionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput">VideoExtractionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus">VideoExtractionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType">VideoExtractionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VideoExtractionStatusInput`<sup>Optional</sup> <a name="VideoExtractionStatusInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatusInput"></a>

```go
func VideoExtractionStatusInput() *string
```

- *Type:* *string

---

##### `VideoExtractionTypeInput`<sup>Optional</sup> <a name="VideoExtractionTypeInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionTypeInput"></a>

```go
func VideoExtractionTypeInput() *string
```

- *Type:* *string

---

##### `VideoExtractionStatus`<sup>Required</sup> <a name="VideoExtractionStatus" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionStatus"></a>

```go
func VideoExtractionStatus() *string
```

- *Type:* *string

---

##### `VideoExtractionType`<sup>Required</sup> <a name="VideoExtractionType" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.videoExtractionType"></a>

```go
func VideoExtractionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseMediaExtractionConfigurationVideoExtractionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBasePermissionsList <a name="QuicksightKnowledgeBasePermissionsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBasePermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightKnowledgeBasePermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get"></a>

```go
func Get(index *f64) QuicksightKnowledgeBasePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBasePermissionsOutputReference <a name="QuicksightKnowledgeBasePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBasePermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightKnowledgeBasePermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBasePermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseTagsList <a name="QuicksightKnowledgeBaseTagsList" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightKnowledgeBaseTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get"></a>

```go
func Get(index *f64) QuicksightKnowledgeBaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightKnowledgeBaseTagsOutputReference <a name="QuicksightKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightknowledgebase"

quicksightknowledgebase.NewQuicksightKnowledgeBaseTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightKnowledgeBaseTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightKnowledgeBase.QuicksightKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



