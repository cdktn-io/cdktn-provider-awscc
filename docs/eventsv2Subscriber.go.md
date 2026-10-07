# `eventsv2Subscriber` Submodule <a name="`eventsv2Subscriber` Submodule" id="@cdktn/provider-awscc.eventsv2Subscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2Subscriber <a name="Eventsv2Subscriber" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber awscc_eventsv2_subscriber}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2Subscriber(scope Construct, id *string, config Eventsv2SubscriberConfig) Eventsv2Subscriber
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig">Eventsv2SubscriberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig">Eventsv2SubscriberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration">PutBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration">PutInvokeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration">PutOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration">PutPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer">PutTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration">ResetBatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration">ResetOnFailureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration">ResetPointInTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition">ResetResumePosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition">ResetStartingPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer">ResetTransformer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBatchConfiguration` <a name="PutBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration"></a>

```go
func PutBatchConfiguration(value Eventsv2SubscriberBatchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putBatchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value Eventsv2SubscriberFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

---

##### `PutInvokeConfiguration` <a name="PutInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration"></a>

```go
func PutInvokeConfiguration(value Eventsv2SubscriberInvokeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putInvokeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration"></a>

```go
func PutLogConfiguration(value Eventsv2SubscriberLogConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

---

##### `PutOnFailureConfiguration` <a name="PutOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration"></a>

```go
func PutOnFailureConfiguration(value Eventsv2SubscriberOnFailureConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putOnFailureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

---

##### `PutPointInTimeConfiguration` <a name="PutPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration"></a>

```go
func PutPointInTimeConfiguration(value Eventsv2SubscriberPointInTimeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putPointInTimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy"></a>

```go
func PutRetryPolicy(value Eventsv2SubscriberRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTransformer` <a name="PutTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer"></a>

```go
func PutTransformer(value Eventsv2SubscriberTransformer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.putTransformer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

---

##### `ResetBatchConfiguration` <a name="ResetBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetBatchConfiguration"></a>

```go
func ResetBatchConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetLogConfiguration"></a>

```go
func ResetLogConfiguration()
```

##### `ResetOnFailureConfiguration` <a name="ResetOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetOnFailureConfiguration"></a>

```go
func ResetOnFailureConfiguration()
```

##### `ResetPointInTimeConfiguration` <a name="ResetPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetPointInTimeConfiguration"></a>

```go
func ResetPointInTimeConfiguration()
```

##### `ResetResumePosition` <a name="ResetResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetResumePosition"></a>

```go
func ResetResumePosition()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetStartingPosition` <a name="ResetStartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetStartingPosition"></a>

```go
func ResetStartingPosition()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTransformer` <a name="ResetTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetTransformer"></a>

```go
func ResetTransformer()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.Eventsv2Subscriber_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.Eventsv2Subscriber_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.Eventsv2Subscriber_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.Eventsv2Subscriber_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Eventsv2Subscriber resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Eventsv2Subscriber to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Eventsv2Subscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2Subscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration">BatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName">BusName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration">InvokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration">PointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn">SubscriberArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer">Transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput">BatchConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput">EventBusArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput">InvokeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput">OnFailureConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput">PointInTimeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput">ResumePositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput">RetryPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput">StartingPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput">TransformerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition">ResumePosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition">StartingPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BatchConfiguration`<sup>Required</sup> <a name="BatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfiguration"></a>

```go
func BatchConfiguration() Eventsv2SubscriberBatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference">Eventsv2SubscriberBatchConfigurationOutputReference</a>

---

##### `BusName`<sup>Required</sup> <a name="BusName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.busName"></a>

```go
func BusName() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfiguration"></a>

```go
func FilterConfiguration() Eventsv2SubscriberFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference">Eventsv2SubscriberFilterConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InvokeConfiguration`<sup>Required</sup> <a name="InvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfiguration"></a>

```go
func InvokeConfiguration() Eventsv2SubscriberInvokeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationOutputReference</a>

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfiguration"></a>

```go
func LogConfiguration() Eventsv2SubscriberLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference">Eventsv2SubscriberLogConfigurationOutputReference</a>

---

##### `OnFailureConfiguration`<sup>Required</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfiguration"></a>

```go
func OnFailureConfiguration() Eventsv2SubscriberOnFailureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference">Eventsv2SubscriberOnFailureConfigurationOutputReference</a>

---

##### `PointInTimeConfiguration`<sup>Required</sup> <a name="PointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfiguration"></a>

```go
func PointInTimeConfiguration() Eventsv2SubscriberPointInTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference">Eventsv2SubscriberPointInTimeConfigurationOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicy"></a>

```go
func RetryPolicy() Eventsv2SubscriberRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference">Eventsv2SubscriberRetryPolicyOutputReference</a>

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.subscriberArn"></a>

```go
func SubscriberArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tags"></a>

```go
func Tags() Eventsv2SubscriberTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList">Eventsv2SubscriberTagsList</a>

---

##### `Transformer`<sup>Required</sup> <a name="Transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformer"></a>

```go
func Transformer() Eventsv2SubscriberTransformerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference">Eventsv2SubscriberTransformerOutputReference</a>

---

##### `BatchConfigurationInput`<sup>Optional</sup> <a name="BatchConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.batchConfigurationInput"></a>

```go
func BatchConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArnInput"></a>

```go
func EventBusArnInput() *string
```

- *Type:* *string

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InvokeConfigurationInput`<sup>Optional</sup> <a name="InvokeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.invokeConfigurationInput"></a>

```go
func InvokeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.logConfigurationInput"></a>

```go
func LogConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnFailureConfigurationInput`<sup>Optional</sup> <a name="OnFailureConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.onFailureConfigurationInput"></a>

```go
func OnFailureConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PointInTimeConfigurationInput`<sup>Optional</sup> <a name="PointInTimeConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.pointInTimeConfigurationInput"></a>

```go
func PointInTimeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResumePositionInput`<sup>Optional</sup> <a name="ResumePositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePositionInput"></a>

```go
func ResumePositionInput() *string
```

- *Type:* *string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `StartingPositionInput`<sup>Optional</sup> <a name="StartingPositionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPositionInput"></a>

```go
func StartingPositionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TransformerInput`<sup>Optional</sup> <a name="TransformerInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.transformerInput"></a>

```go
func TransformerInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResumePosition`<sup>Required</sup> <a name="ResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.resumePosition"></a>

```go
func ResumePosition() *string
```

- *Type:* *string

---

##### `StartingPosition`<sup>Required</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.startingPosition"></a>

```go
func StartingPosition() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2Subscriber.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2SubscriberBatchConfiguration <a name="Eventsv2SubscriberBatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberBatchConfiguration {
	MaxBatchSize: *f64,
	MaxBatchWindowInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | The maximum number of events in a single batch delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds">MaxBatchWindowInSeconds</a></code> | <code>*f64</code> | The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. |

---

##### `MaxBatchSize`<sup>Optional</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchSize"></a>

```go
MaxBatchSize *f64
```

- *Type:* *f64

The maximum number of events in a single batch delivered to the target.

The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_size Eventsv2Subscriber#max_batch_size}

---

##### `MaxBatchWindowInSeconds`<sup>Optional</sup> <a name="MaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration.property.maxBatchWindowInSeconds"></a>

```go
MaxBatchWindowInSeconds *f64
```

- *Type:* *f64

The maximum time in seconds to wait for a batch to fill before delivering it, 0-300.

The default is 0 (no wait). The resolved value applied by the service is returned on read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_batch_window_in_seconds Eventsv2Subscriber#max_batch_window_in_seconds}

---

### Eventsv2SubscriberConfig <a name="Eventsv2SubscriberConfig" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventBusArn: *string,
	InvokeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration,
	Name: *string,
	BatchConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration,
	Description: *string,
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration,
	LogConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration,
	OnFailureConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration,
	PointInTimeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration,
	ResumePosition: *string,
	RetryPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy,
	StartingPosition: *string,
	State: *string,
	Tags: interface{},
	Transformer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | The ARN of the event bus this subscriber belongs to. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration">InvokeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a></code> | Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name">Name</a></code> | <code>*string</code> | The name of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration">BatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a></code> | Configuration for batching events into a single delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description">Description</a></code> | <code>*string</code> | A description of the subscriber. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a></code> | Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a></code> | Delivery logging configuration for the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration">OnFailureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a></code> | The destination for events that could not be delivered to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration">PointInTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a></code> | The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition">ResumePosition</a></code> | <code>*string</code> | Resume-time control, never returned by the service. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a></code> | The retry policy for failed deliveries to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition">StartingPosition</a></code> | <code>*string</code> | Where the subscriber starts reading events: LATEST starts from the newest events; |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state">State</a></code> | <code>*string</code> | The run state of the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags assigned to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer">Transformer</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a></code> | Configuration for transforming events before delivery to the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type">Type</a></code> | <code>*string</code> | The delivery ordering mode of the subscriber. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.eventBusArn"></a>

```go
EventBusArn *string
```

- *Type:* *string

The ARN of the event bus this subscriber belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_arn Eventsv2Subscriber#event_bus_arn}

---

##### `InvokeConfiguration`<sup>Required</sup> <a name="InvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.invokeConfiguration"></a>

```go
InvokeConfiguration Eventsv2SubscriberInvokeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration">Eventsv2SubscriberInvokeConfiguration</a>

Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invoke_configuration Eventsv2Subscriber#invoke_configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the subscriber.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `BatchConfiguration`<sup>Optional</sup> <a name="BatchConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.batchConfiguration"></a>

```go
BatchConfiguration Eventsv2SubscriberBatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfiguration">Eventsv2SubscriberBatchConfiguration</a>

Configuration for batching events into a single delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#batch_configuration Eventsv2Subscriber#batch_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the subscriber. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#description Eventsv2Subscriber#description}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.filterConfiguration"></a>

```go
FilterConfiguration Eventsv2SubscriberFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration">Eventsv2SubscriberFilterConfiguration</a>

Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filter_configuration Eventsv2Subscriber#filter_configuration}

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.logConfiguration"></a>

```go
LogConfiguration Eventsv2SubscriberLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration">Eventsv2SubscriberLogConfiguration</a>

Delivery logging configuration for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#log_configuration Eventsv2Subscriber#log_configuration}

---

##### `OnFailureConfiguration`<sup>Optional</sup> <a name="OnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.onFailureConfiguration"></a>

```go
OnFailureConfiguration Eventsv2SubscriberOnFailureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration">Eventsv2SubscriberOnFailureConfiguration</a>

The destination for events that could not be delivered to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#on_failure_configuration Eventsv2Subscriber#on_failure_configuration}

---

##### `PointInTimeConfiguration`<sup>Optional</sup> <a name="PointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.pointInTimeConfiguration"></a>

```go
PointInTimeConfiguration Eventsv2SubscriberPointInTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration">Eventsv2SubscriberPointInTimeConfiguration</a>

The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_in_time_configuration Eventsv2Subscriber#point_in_time_configuration}

---

##### `ResumePosition`<sup>Optional</sup> <a name="ResumePosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.resumePosition"></a>

```go
ResumePosition *string
```

- *Type:* *string

Resume-time control, never returned by the service.

Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#resume_position Eventsv2Subscriber#resume_position}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.retryPolicy"></a>

```go
RetryPolicy Eventsv2SubscriberRetryPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy">Eventsv2SubscriberRetryPolicy</a>

The retry policy for failed deliveries to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_policy Eventsv2Subscriber#retry_policy}

---

##### `StartingPosition`<sup>Optional</sup> <a name="StartingPosition" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.startingPosition"></a>

```go
StartingPosition *string
```

- *Type:* *string

Where the subscriber starts reading events: LATEST starts from the newest events;

POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_position Eventsv2Subscriber#starting_position}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The run state of the subscriber.

Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#state Eventsv2Subscriber#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags assigned to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tags Eventsv2Subscriber#tags}

---

##### `Transformer`<sup>Optional</sup> <a name="Transformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.transformer"></a>

```go
Transformer Eventsv2SubscriberTransformer
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer">Eventsv2SubscriberTransformer</a>

Configuration for transforming events before delivery to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#transformer Eventsv2Subscriber#transformer}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The delivery ordering mode of the subscriber.

FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberFilterConfiguration <a name="Eventsv2SubscriberFilterConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberFilterConfiguration {
	Filters: interface{},
	Language: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters">Filters</a></code> | <code>interface{}</code> | The list of filters, 1-50 entries. An event must match every filter to be delivered. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language">Language</a></code> | <code>*string</code> | The filter language. The default is EVENT_BRIDGE_PATTERN. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

The list of filters, 1-50 entries. An event must match every filter to be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#filters Eventsv2Subscriber#filters}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfiguration.property.language"></a>

```go
Language *string
```

- *Type:* *string

The filter language. The default is EVENT_BRIDGE_PATTERN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#language Eventsv2Subscriber#language}

---

### Eventsv2SubscriberFilterConfigurationFilters <a name="Eventsv2SubscriberFilterConfigurationFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberFilterConfigurationFilters {
	Pattern: *string,
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern">Pattern</a></code> | <code>*string</code> | The event pattern, as a JSON string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope">Scope</a></code> | <code>*string</code> | Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata). |

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The event pattern, as a JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#pattern Eventsv2Subscriber#pattern}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFilters.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#scope Eventsv2Subscriber#scope}

---

### Eventsv2SubscriberInvokeConfiguration <a name="Eventsv2SubscriberInvokeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfiguration {
	RoleArn: *string,
	TargetArn: *string,
	EventBusV2Parameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters,
	HttpParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters,
	KinesisParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters,
	LambdaParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters,
	SnsParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters,
	SqsParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters,
	StepFunctionsParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters,
	UniversalTargetParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role the service assumes to invoke the target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn">TargetArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the target that the subscriber invokes. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters">EventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a></code> | Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a></code> | Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a></code> | Parameters for writing events to an Amazon Kinesis Data Streams target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a></code> | Parameters for invoking an AWS Lambda function target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters">SnsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a></code> | Parameters for publishing events to an Amazon SNS topic target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a></code> | Parameters for sending events to an Amazon SQS queue target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a></code> | Parameters for starting an AWS Step Functions state machine execution target. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters">UniversalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a></code> | Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role the service assumes to invoke the target.

The role must belong to the same account as the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#role_arn Eventsv2Subscriber#role_arn}

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.targetArn"></a>

```go
TargetArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the target that the subscriber invokes.

For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#target_arn Eventsv2Subscriber#target_arn}

---

##### `EventBusV2Parameters`<sup>Optional</sup> <a name="EventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.eventBusV2Parameters"></a>

```go
EventBusV2Parameters Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_bus_v2_parameters Eventsv2Subscriber#event_bus_v2_parameters}

---

##### `HttpParameters`<sup>Optional</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.httpParameters"></a>

```go
HttpParameters Eventsv2SubscriberInvokeConfigurationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#http_parameters Eventsv2Subscriber#http_parameters}

---

##### `KinesisParameters`<sup>Optional</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.kinesisParameters"></a>

```go
KinesisParameters Eventsv2SubscriberInvokeConfigurationKinesisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

Parameters for writing events to an Amazon Kinesis Data Streams target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#kinesis_parameters Eventsv2Subscriber#kinesis_parameters}

---

##### `LambdaParameters`<sup>Optional</sup> <a name="LambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.lambdaParameters"></a>

```go
LambdaParameters Eventsv2SubscriberInvokeConfigurationLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

Parameters for invoking an AWS Lambda function target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#lambda_parameters Eventsv2Subscriber#lambda_parameters}

---

##### `SnsParameters`<sup>Optional</sup> <a name="SnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.snsParameters"></a>

```go
SnsParameters Eventsv2SubscriberInvokeConfigurationSnsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

Parameters for publishing events to an Amazon SNS topic target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sns_parameters Eventsv2Subscriber#sns_parameters}

---

##### `SqsParameters`<sup>Optional</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.sqsParameters"></a>

```go
SqsParameters Eventsv2SubscriberInvokeConfigurationSqsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

Parameters for sending events to an Amazon SQS queue target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#sqs_parameters Eventsv2Subscriber#sqs_parameters}

---

##### `StepFunctionsParameters`<sup>Optional</sup> <a name="StepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.stepFunctionsParameters"></a>

```go
StepFunctionsParameters Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

Parameters for starting an AWS Step Functions state machine execution target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#step_functions_parameters Eventsv2Subscriber#step_functions_parameters}

---

##### `UniversalTargetParameters`<sup>Optional</sup> <a name="UniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfiguration.property.universalTargetParameters"></a>

```go
UniversalTargetParameters Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#universal_target_parameters Eventsv2Subscriber#universal_target_parameters}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters {
	DeduplicationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration,
	Metadata: *map[string]*string,
	SystemMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a></code> | Deduplication settings applied to the forwarded events on the downstream event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Metadata forwarded with each event, as key-value string pairs. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata">SystemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a></code> | System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus. |

---

##### `DeduplicationConfiguration`<sup>Optional</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.deduplicationConfiguration"></a>

```go
DeduplicationConfiguration Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

Deduplication settings applied to the forwarded events on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_configuration Eventsv2Subscriber#deduplication_configuration}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Metadata forwarded with each event, as key-value string pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#metadata Eventsv2Subscriber#metadata}

---

##### `SystemMetadata`<sup>Optional</sup> <a name="SystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters.property.systemMetadata"></a>

```go
SystemMetadata Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#system_metadata Eventsv2Subscriber#system_metadata}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration {
	DeduplicationType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType">DeduplicationType</a></code> | <code>*string</code> | How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. |

---

##### `DeduplicationType`<sup>Optional</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration.property.deduplicationType"></a>

```go
DeduplicationType *string
```

- *Type:* *string

How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content.

To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_type Eventsv2Subscriber#deduplication_type}

---

### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata {
	DeduplicationId: *string,
	EventGroupId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId">DeduplicationId</a></code> | <code>*string</code> | The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId">EventGroupId</a></code> | <code>*string</code> | The event group ID for FIFO ordering on the downstream event bus. |

---

##### `DeduplicationId`<sup>Optional</sup> <a name="DeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.deduplicationId"></a>

```go
DeduplicationId *string
```

- *Type:* *string

The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#deduplication_id Eventsv2Subscriber#deduplication_id}

---

##### `EventGroupId`<sup>Optional</sup> <a name="EventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata.property.eventGroupId"></a>

```go
EventGroupId *string
```

- *Type:* *string

The event group ID for FIFO ordering on the downstream event bus.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#event_group_id Eventsv2Subscriber#event_group_id}

---

### Eventsv2SubscriberInvokeConfigurationHttpParameters <a name="Eventsv2SubscriberInvokeConfigurationHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters {
	HeaderParameters: *map[string]*string,
	InvocationTimeoutSeconds: *string,
	PathParameterValues: *[]*string,
	QueryStringParameters: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>*map[string]*string</code> | HTTP headers to add to the request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues">PathParameterValues</a></code> | <code>*[]*string</code> | Values for the path parameters (wildcards) in the target URL, in order. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>*map[string]*string</code> | Query string parameters to add to the request. |

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.headerParameters"></a>

```go
HeaderParameters *map[string]*string
```

- *Type:* *map[string]*string

HTTP headers to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#header_parameters Eventsv2Subscriber#header_parameters}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.invocationTimeoutSeconds"></a>

```go
InvocationTimeoutSeconds *string
```

- *Type:* *string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `PathParameterValues`<sup>Optional</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.pathParameterValues"></a>

```go
PathParameterValues *[]*string
```

- *Type:* *[]*string

Values for the path parameters (wildcards) in the target URL, in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#path_parameter_values Eventsv2Subscriber#path_parameter_values}

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters.property.queryStringParameters"></a>

```go
QueryStringParameters *map[string]*string
```

- *Type:* *map[string]*string

Query string parameters to add to the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#query_string_parameters Eventsv2Subscriber#query_string_parameters}

---

### Eventsv2SubscriberInvokeConfigurationKinesisParameters <a name="Eventsv2SubscriberInvokeConfigurationKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters {
	ExplicitHashKey: *string,
	PartitionKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey">ExplicitHashKey</a></code> | <code>*string</code> | An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | The partition key that determines which shard each record is written to. |

---

##### `ExplicitHashKey`<sup>Optional</sup> <a name="ExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.explicitHashKey"></a>

```go
ExplicitHashKey *string
```

- *Type:* *string

An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#explicit_hash_key Eventsv2Subscriber#explicit_hash_key}

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters.property.partitionKey"></a>

```go
PartitionKey *string
```

- *Type:* *string

The partition key that determines which shard each record is written to.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#partition_key Eventsv2Subscriber#partition_key}

---

### Eventsv2SubscriberInvokeConfigurationLambdaParameters <a name="Eventsv2SubscriberInvokeConfigurationLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters {
	DurableExecutionName: *string,
	InvocationTimeoutSeconds: *string,
	InvocationType: *string,
	Qualifier: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName">DurableExecutionName</a></code> | <code>*string</code> | A unique name for a durable function execution. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType">InvocationType</a></code> | <code>*string</code> | How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier">Qualifier</a></code> | <code>*string</code> | The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId">TenantId</a></code> | <code>*string</code> | The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression. |

---

##### `DurableExecutionName`<sup>Optional</sup> <a name="DurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.durableExecutionName"></a>

```go
DurableExecutionName *string
```

- *Type:* *string

A unique name for a durable function execution. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#durable_execution_name Eventsv2Subscriber#durable_execution_name}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationTimeoutSeconds"></a>

```go
InvocationTimeoutSeconds *string
```

- *Type:* *string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.invocationType"></a>

```go
InvocationType *string
```

- *Type:* *string

How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.qualifier"></a>

```go
Qualifier *string
```

- *Type:* *string

The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#qualifier Eventsv2Subscriber#qualifier}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#tenant_id Eventsv2Subscriber#tenant_id}

---

### Eventsv2SubscriberInvokeConfigurationSnsParameters <a name="Eventsv2SubscriberInvokeConfigurationSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters {
	MessageAttributes: interface{},
	MessageDeduplicationId: *string,
	MessageGroupId: *string,
	MessageStructure: *string,
	Subject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes">MessageAttributes</a></code> | <code>interface{}</code> | Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | The message deduplication ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | The message group ID to use when the target is a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure">MessageStructure</a></code> | <code>*string</code> | Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject">Subject</a></code> | <code>*string</code> | The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression. |

---

##### `MessageAttributes`<sup>Optional</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageAttributes"></a>

```go
MessageAttributes interface{}
```

- *Type:* interface{}

Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `MessageDeduplicationId`<sup>Optional</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageDeduplicationId"></a>

```go
MessageDeduplicationId *string
```

- *Type:* *string

The message deduplication ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageGroupId"></a>

```go
MessageGroupId *string
```

- *Type:* *string

The message group ID to use when the target is a FIFO topic.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `MessageStructure`<sup>Optional</sup> <a name="MessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.messageStructure"></a>

```go
MessageStructure *string
```

- *Type:* *string

Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_structure Eventsv2Subscriber#message_structure}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#subject Eventsv2Subscriber#subject}

---

### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes {
	BinaryValue: *string,
	DataType: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType">DataType</a></code> | <code>*string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue">StringValue</a></code> | <code>*string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.binaryValue"></a>

```go
BinaryValue *string
```

- *Type:* *string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributes.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParameters <a name="Eventsv2SubscriberInvokeConfigurationSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters {
	DelaySeconds: *string,
	MessageAttributes: interface{},
	MessageDeduplicationId: *string,
	MessageGroupId: *string,
	MessageSystemAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds">DelaySeconds</a></code> | <code>*string</code> | The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes">MessageAttributes</a></code> | <code>interface{}</code> | Custom message attributes to attach to each message. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | The message deduplication ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | The message group ID to use when the target is a FIFO queue. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes">MessageSystemAttributes</a></code> | <code>interface{}</code> | Message system attributes to attach to each message, such as AWSTraceHeader. |

---

##### `DelaySeconds`<sup>Optional</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.delaySeconds"></a>

```go
DelaySeconds *string
```

- *Type:* *string

The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#delay_seconds Eventsv2Subscriber#delay_seconds}

---

##### `MessageAttributes`<sup>Optional</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageAttributes"></a>

```go
MessageAttributes interface{}
```

- *Type:* interface{}

Custom message attributes to attach to each message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_attributes Eventsv2Subscriber#message_attributes}

---

##### `MessageDeduplicationId`<sup>Optional</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageDeduplicationId"></a>

```go
MessageDeduplicationId *string
```

- *Type:* *string

The message deduplication ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_deduplication_id Eventsv2Subscriber#message_deduplication_id}

---

##### `MessageGroupId`<sup>Optional</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageGroupId"></a>

```go
MessageGroupId *string
```

- *Type:* *string

The message group ID to use when the target is a FIFO queue.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_group_id Eventsv2Subscriber#message_group_id}

---

##### `MessageSystemAttributes`<sup>Optional</sup> <a name="MessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters.property.messageSystemAttributes"></a>

```go
MessageSystemAttributes interface{}
```

- *Type:* interface{}

Message system attributes to attach to each message, such as AWSTraceHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#message_system_attributes Eventsv2Subscriber#message_system_attributes}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes {
	BinaryValue: *string,
	DataType: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType">DataType</a></code> | <code>*string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue">StringValue</a></code> | <code>*string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.binaryValue"></a>

```go
BinaryValue *string
```

- *Type:* *string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributes.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes {
	BinaryValue: *string,
	DataType: *string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | The attribute value for the Binary data type, Base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType">DataType</a></code> | <code>*string</code> | The attribute data type. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue">StringValue</a></code> | <code>*string</code> | The attribute value for the String and Number data types (and String.Array for Amazon SNS targets). |

---

##### `BinaryValue`<sup>Optional</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.binaryValue"></a>

```go
BinaryValue *string
```

- *Type:* *string

The attribute value for the Binary data type, Base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#binary_value Eventsv2Subscriber#binary_value}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

The attribute data type.

For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#data_type Eventsv2Subscriber#data_type}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributes.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#string_value Eventsv2Subscriber#string_value}

---

### Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters {
	InvocationTimeoutSeconds: *string,
	InvocationType: *string,
	Name: *string,
	TraceHeader: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | The timeout in seconds for each invocation of the target, written as a string. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType">InvocationType</a></code> | <code>*string</code> | How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name">Name</a></code> | <code>*string</code> | A name for the execution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader">TraceHeader</a></code> | <code>*string</code> | The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression. |

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationTimeoutSeconds"></a>

```go
InvocationTimeoutSeconds *string
```

- *Type:* *string

The timeout in seconds for each invocation of the target, written as a string.

Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

##### `InvocationType`<sup>Optional</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.invocationType"></a>

```go
InvocationType *string
```

- *Type:* *string

How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_type Eventsv2Subscriber#invocation_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the execution.

Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#name Eventsv2Subscriber#name}

---

##### `TraceHeader`<sup>Optional</sup> <a name="TraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters.property.traceHeader"></a>

```go
TraceHeader *string
```

- *Type:* *string

The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#trace_header Eventsv2Subscriber#trace_header}

---

### Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters {
	Input: *string,
	InvocationTimeoutSeconds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input">Input</a></code> | <code>*string</code> | JSON string or JSONata expression that produces the API request. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | Timeout in seconds for each invocation of the target (1-30, default 30). |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.input"></a>

```go
Input *string
```

- *Type:* *string

JSON string or JSONata expression that produces the API request.

Supports {% ... %} JSONata expressions for dynamic values from the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#input Eventsv2Subscriber#input}

---

##### `InvocationTimeoutSeconds`<sup>Optional</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters.property.invocationTimeoutSeconds"></a>

```go
InvocationTimeoutSeconds *string
```

- *Type:* *string

Timeout in seconds for each invocation of the target (1-30, default 30).

Must be a literal integer written as a string; JSONata expressions are not supported for this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#invocation_timeout_seconds Eventsv2Subscriber#invocation_timeout_seconds}

---

### Eventsv2SubscriberLogConfiguration <a name="Eventsv2SubscriberLogConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberLogConfiguration {
	IncludePayload: *string,
	Level: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload">IncludePayload</a></code> | <code>*string</code> | Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level">Level</a></code> | <code>*string</code> | The minimum log level: OFF (no logging), ERROR, or INFO. |

---

##### `IncludePayload`<sup>Optional</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.includePayload"></a>

```go
IncludePayload *string
```

- *Type:* *string

Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records.

The default is ON_ERROR_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#include_payload Eventsv2Subscriber#include_payload}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfiguration.property.level"></a>

```go
Level *string
```

- *Type:* *string

The minimum log level: OFF (no logging), ERROR, or INFO.

Records below this level are not emitted. The default is OFF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#level Eventsv2Subscriber#level}

---

### Eventsv2SubscriberOnFailureConfiguration <a name="Eventsv2SubscriberOnFailureConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberOnFailureConfiguration {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the destination that receives events that could not be delivered. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfiguration.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the destination that receives events that could not be delivered.

An Amazon SQS queue is the supported destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#arn Eventsv2Subscriber#arn}

---

### Eventsv2SubscriberPointInTimeConfiguration <a name="Eventsv2SubscriberPointInTimeConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberPointInTimeConfiguration {
	EndPoint: *f64,
	PointType: *string,
	StartingPoint: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint">EndPoint</a></code> | <code>*f64</code> | An optional time to stop delivering events at, in seconds since the Unix epoch. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType">PointType</a></code> | <code>*string</code> | Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint">StartingPoint</a></code> | <code>*f64</code> | The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP. |

---

##### `EndPoint`<sup>Optional</sup> <a name="EndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.endPoint"></a>

```go
EndPoint *f64
```

- *Type:* *f64

An optional time to stop delivering events at, in seconds since the Unix epoch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#end_point Eventsv2Subscriber#end_point}

---

##### `PointType`<sup>Optional</sup> <a name="PointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.pointType"></a>

```go
PointType *string
```

- *Type:* *string

Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#point_type Eventsv2Subscriber#point_type}

---

##### `StartingPoint`<sup>Optional</sup> <a name="StartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfiguration.property.startingPoint"></a>

```go
StartingPoint *f64
```

- *Type:* *f64

The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#starting_point Eventsv2Subscriber#starting_point}

---

### Eventsv2SubscriberRetryPolicy <a name="Eventsv2SubscriberRetryPolicy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberRetryPolicy {
	MaxEventAgeInSeconds: *f64,
	MaxRetryAttempts: *f64,
	RetryStrategy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds">MaxEventAgeInSeconds</a></code> | <code>*f64</code> | The maximum age of an event in seconds, 60-86400 (24 hours). |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts">MaxRetryAttempts</a></code> | <code>*f64</code> | The maximum number of retry attempts, 0-185. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy">RetryStrategy</a></code> | <code>*string</code> | Which errors are retried. ALL retries all errors. The default is ALL. |

---

##### `MaxEventAgeInSeconds`<sup>Optional</sup> <a name="MaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxEventAgeInSeconds"></a>

```go
MaxEventAgeInSeconds *f64
```

- *Type:* *f64

The maximum age of an event in seconds, 60-86400 (24 hours).

When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_event_age_in_seconds Eventsv2Subscriber#max_event_age_in_seconds}

---

##### `MaxRetryAttempts`<sup>Optional</sup> <a name="MaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.maxRetryAttempts"></a>

```go
MaxRetryAttempts *f64
```

- *Type:* *f64

The maximum number of retry attempts, 0-185.

When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#max_retry_attempts Eventsv2Subscriber#max_retry_attempts}

---

##### `RetryStrategy`<sup>Optional</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicy.property.retryStrategy"></a>

```go
RetryStrategy *string
```

- *Type:* *string

Which errors are retried. ALL retries all errors. The default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#retry_strategy Eventsv2Subscriber#retry_strategy}

---

### Eventsv2SubscriberTags <a name="Eventsv2SubscriberTags" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#key Eventsv2Subscriber#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#value Eventsv2Subscriber#value}

---

### Eventsv2SubscriberTransformer <a name="Eventsv2SubscriberTransformer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberTransformer {
	JsonataConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration">JsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a></code> | The JSONata expression configuration. Required when Type is JSONATA. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type">Type</a></code> | <code>*string</code> | The transform type: RAW delivers the event payload only; |

---

##### `JsonataConfiguration`<sup>Optional</sup> <a name="JsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.jsonataConfiguration"></a>

```go
JsonataConfiguration Eventsv2SubscriberTransformerJsonataConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

The JSONata expression configuration. Required when Type is JSONATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#jsonata_configuration Eventsv2Subscriber#jsonata_configuration}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformer.property.type"></a>

```go
Type *string
```

- *Type:* *string

The transform type: RAW delivers the event payload only;

WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#type Eventsv2Subscriber#type}

---

### Eventsv2SubscriberTransformerJsonataConfiguration <a name="Eventsv2SubscriberTransformerJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

&eventsv2subscriber.Eventsv2SubscriberTransformerJsonataConfiguration {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression">Expression</a></code> | <code>*string</code> | The JSONata expression that transforms the event, enclosed in {% %} delimiters. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

The JSONata expression that transforms the event, enclosed in {% %} delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/eventsv2_subscriber#expression Eventsv2Subscriber#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2SubscriberBatchConfigurationOutputReference <a name="Eventsv2SubscriberBatchConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberBatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberBatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize">ResetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds">ResetMaxBatchWindowInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxBatchSize` <a name="ResetMaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchSize"></a>

```go
func ResetMaxBatchSize()
```

##### `ResetMaxBatchWindowInSeconds` <a name="ResetMaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.resetMaxBatchWindowInSeconds"></a>

```go
func ResetMaxBatchWindowInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput">MaxBatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput">MaxBatchWindowInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize">MaxBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds">MaxBatchWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxBatchSizeInput`<sup>Optional</sup> <a name="MaxBatchSizeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSizeInput"></a>

```go
func MaxBatchSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxBatchWindowInSecondsInput`<sup>Optional</sup> <a name="MaxBatchWindowInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSecondsInput"></a>

```go
func MaxBatchWindowInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchSize"></a>

```go
func MaxBatchSize() *f64
```

- *Type:* *f64

---

##### `MaxBatchWindowInSeconds`<sup>Required</sup> <a name="MaxBatchWindowInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.maxBatchWindowInSeconds"></a>

```go
func MaxBatchWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberBatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberFilterConfigurationFiltersList <a name="Eventsv2SubscriberFilterConfigurationFiltersList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberFilterConfigurationFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Eventsv2SubscriberFilterConfigurationFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get"></a>

```go
func Get(index *f64) Eventsv2SubscriberFilterConfigurationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberFilterConfigurationFiltersOutputReference <a name="Eventsv2SubscriberFilterConfigurationFiltersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberFilterConfigurationFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Eventsv2SubscriberFilterConfigurationFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPattern` <a name="ResetPattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberFilterConfigurationOutputReference <a name="Eventsv2SubscriberFilterConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage">ResetLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.resetLanguage"></a>

```go
func ResetLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filters"></a>

```go
func Filters() Eventsv2SubscriberFilterConfigurationFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationFiltersList">Eventsv2SubscriberFilterConfigurationFiltersList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType">ResetDeduplicationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeduplicationType` <a name="ResetDeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.resetDeduplicationType"></a>

```go
func ResetDeduplicationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput">DeduplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType">DeduplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationTypeInput`<sup>Optional</sup> <a name="DeduplicationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationTypeInput"></a>

```go
func DeduplicationTypeInput() *string
```

- *Type:* *string

---

##### `DeduplicationType`<sup>Required</sup> <a name="DeduplicationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.deduplicationType"></a>

```go
func DeduplicationType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration">PutDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata">PutSystemMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration">ResetDeduplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata">ResetSystemMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeduplicationConfiguration` <a name="PutDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration"></a>

```go
func PutDeduplicationConfiguration(value Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putDeduplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfiguration</a>

---

##### `PutSystemMetadata` <a name="PutSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata"></a>

```go
func PutSystemMetadata(value Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.putSystemMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadata</a>

---

##### `ResetDeduplicationConfiguration` <a name="ResetDeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetDeduplicationConfiguration"></a>

```go
func ResetDeduplicationConfiguration()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetSystemMetadata` <a name="ResetSystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.resetSystemMetadata"></a>

```go
func ResetSystemMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration">DeduplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata">SystemMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput">DeduplicationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput">SystemMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationConfiguration`<sup>Required</sup> <a name="DeduplicationConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfiguration"></a>

```go
func DeduplicationConfiguration() Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersDeduplicationConfigurationOutputReference</a>

---

##### `SystemMetadata`<sup>Required</sup> <a name="SystemMetadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadata"></a>

```go
func SystemMetadata() Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference</a>

---

##### `DeduplicationConfigurationInput`<sup>Optional</sup> <a name="DeduplicationConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.deduplicationConfigurationInput"></a>

```go
func DeduplicationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SystemMetadataInput`<sup>Optional</sup> <a name="SystemMetadataInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.systemMetadataInput"></a>

```go
func SystemMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference <a name="Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId">ResetDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId">ResetEventGroupId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeduplicationId` <a name="ResetDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetDeduplicationId"></a>

```go
func ResetDeduplicationId()
```

##### `ResetEventGroupId` <a name="ResetEventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.resetEventGroupId"></a>

```go
func ResetEventGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput">DeduplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput">EventGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId">DeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId">EventGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeduplicationIdInput`<sup>Optional</sup> <a name="DeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationIdInput"></a>

```go
func DeduplicationIdInput() *string
```

- *Type:* *string

---

##### `EventGroupIdInput`<sup>Optional</sup> <a name="EventGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupIdInput"></a>

```go
func EventGroupIdInput() *string
```

- *Type:* *string

---

##### `DeduplicationId`<sup>Required</sup> <a name="DeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.deduplicationId"></a>

```go
func DeduplicationId() *string
```

- *Type:* *string

---

##### `EventGroupId`<sup>Required</sup> <a name="EventGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.eventGroupId"></a>

```go
func EventGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersSystemMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues">ResetPathParameterValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetHeaderParameters"></a>

```go
func ResetHeaderParameters()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```go
func ResetInvocationTimeoutSeconds()
```

##### `ResetPathParameterValues` <a name="ResetPathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetPathParameterValues"></a>

```go
func ResetPathParameterValues()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.resetQueryStringParameters"></a>

```go
func ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput">PathParameterValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues">PathParameterValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParametersInput"></a>

```go
func HeaderParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```go
func InvocationTimeoutSecondsInput() *string
```

- *Type:* *string

---

##### `PathParameterValuesInput`<sup>Optional</sup> <a name="PathParameterValuesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValuesInput"></a>

```go
func PathParameterValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```go
func QueryStringParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `PathParameterValues`<sup>Required</sup> <a name="PathParameterValues" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.pathParameterValues"></a>

```go
func PathParameterValues() *[]*string
```

- *Type:* *[]*string

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey">ResetExplicitHashKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExplicitHashKey` <a name="ResetExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetExplicitHashKey"></a>

```go
func ResetExplicitHashKey()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.resetPartitionKey"></a>

```go
func ResetPartitionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput">ExplicitHashKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey">ExplicitHashKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExplicitHashKeyInput`<sup>Optional</sup> <a name="ExplicitHashKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKeyInput"></a>

```go
func ExplicitHashKeyInput() *string
```

- *Type:* *string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKeyInput"></a>

```go
func PartitionKeyInput() *string
```

- *Type:* *string

---

##### `ExplicitHashKey`<sup>Required</sup> <a name="ExplicitHashKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.explicitHashKey"></a>

```go
func ExplicitHashKey() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName">ResetDurableExecutionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurableExecutionName` <a name="ResetDurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetDurableExecutionName"></a>

```go
func ResetDurableExecutionName()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```go
func ResetInvocationTimeoutSeconds()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetInvocationType"></a>

```go
func ResetInvocationType()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetQualifier"></a>

```go
func ResetQualifier()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput">DurableExecutionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput">QualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName">DurableExecutionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurableExecutionNameInput`<sup>Optional</sup> <a name="DurableExecutionNameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionNameInput"></a>

```go
func DurableExecutionNameInput() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```go
func InvocationTimeoutSecondsInput() *string
```

- *Type:* *string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTypeInput"></a>

```go
func InvocationTypeInput() *string
```

- *Type:* *string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifierInput"></a>

```go
func QualifierInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `DurableExecutionName`<sup>Required</sup> <a name="DurableExecutionName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.durableExecutionName"></a>

```go
func DurableExecutionName() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationOutputReference <a name="Eventsv2SubscriberInvokeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters">PutEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters">PutHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters">PutKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters">PutLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters">PutSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters">PutSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters">PutStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters">PutUniversalTargetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters">ResetEventBusV2Parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters">ResetHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters">ResetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters">ResetLambdaParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters">ResetSnsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters">ResetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters">ResetStepFunctionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters">ResetUniversalTargetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventBusV2Parameters` <a name="PutEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters"></a>

```go
func PutEventBusV2Parameters(value Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putEventBusV2Parameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters">Eventsv2SubscriberInvokeConfigurationEventBusV2Parameters</a>

---

##### `PutHttpParameters` <a name="PutHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters"></a>

```go
func PutHttpParameters(value Eventsv2SubscriberInvokeConfigurationHttpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParameters">Eventsv2SubscriberInvokeConfigurationHttpParameters</a>

---

##### `PutKinesisParameters` <a name="PutKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters"></a>

```go
func PutKinesisParameters(value Eventsv2SubscriberInvokeConfigurationKinesisParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParameters">Eventsv2SubscriberInvokeConfigurationKinesisParameters</a>

---

##### `PutLambdaParameters` <a name="PutLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters"></a>

```go
func PutLambdaParameters(value Eventsv2SubscriberInvokeConfigurationLambdaParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putLambdaParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParameters">Eventsv2SubscriberInvokeConfigurationLambdaParameters</a>

---

##### `PutSnsParameters` <a name="PutSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters"></a>

```go
func PutSnsParameters(value Eventsv2SubscriberInvokeConfigurationSnsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSnsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParameters">Eventsv2SubscriberInvokeConfigurationSnsParameters</a>

---

##### `PutSqsParameters` <a name="PutSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters"></a>

```go
func PutSqsParameters(value Eventsv2SubscriberInvokeConfigurationSqsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParameters">Eventsv2SubscriberInvokeConfigurationSqsParameters</a>

---

##### `PutStepFunctionsParameters` <a name="PutStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters"></a>

```go
func PutStepFunctionsParameters(value Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putStepFunctionsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters">Eventsv2SubscriberInvokeConfigurationStepFunctionsParameters</a>

---

##### `PutUniversalTargetParameters` <a name="PutUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters"></a>

```go
func PutUniversalTargetParameters(value Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.putUniversalTargetParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters">Eventsv2SubscriberInvokeConfigurationUniversalTargetParameters</a>

---

##### `ResetEventBusV2Parameters` <a name="ResetEventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetEventBusV2Parameters"></a>

```go
func ResetEventBusV2Parameters()
```

##### `ResetHttpParameters` <a name="ResetHttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetHttpParameters"></a>

```go
func ResetHttpParameters()
```

##### `ResetKinesisParameters` <a name="ResetKinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetKinesisParameters"></a>

```go
func ResetKinesisParameters()
```

##### `ResetLambdaParameters` <a name="ResetLambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetLambdaParameters"></a>

```go
func ResetLambdaParameters()
```

##### `ResetSnsParameters` <a name="ResetSnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSnsParameters"></a>

```go
func ResetSnsParameters()
```

##### `ResetSqsParameters` <a name="ResetSqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetSqsParameters"></a>

```go
func ResetSqsParameters()
```

##### `ResetStepFunctionsParameters` <a name="ResetStepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetStepFunctionsParameters"></a>

```go
func ResetStepFunctionsParameters()
```

##### `ResetUniversalTargetParameters` <a name="ResetUniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.resetUniversalTargetParameters"></a>

```go
func ResetUniversalTargetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters">EventBusV2Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters">HttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters">KinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters">LambdaParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters">SnsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters">SqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters">StepFunctionsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters">UniversalTargetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput">EventBusV2ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput">HttpParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput">KinesisParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput">LambdaParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput">SnsParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput">SqsParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput">StepFunctionsParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput">TargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput">UniversalTargetParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventBusV2Parameters`<sup>Required</sup> <a name="EventBusV2Parameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2Parameters"></a>

```go
func EventBusV2Parameters() Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference">Eventsv2SubscriberInvokeConfigurationEventBusV2ParametersOutputReference</a>

---

##### `HttpParameters`<sup>Required</sup> <a name="HttpParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParameters"></a>

```go
func HttpParameters() Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference">Eventsv2SubscriberInvokeConfigurationHttpParametersOutputReference</a>

---

##### `KinesisParameters`<sup>Required</sup> <a name="KinesisParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParameters"></a>

```go
func KinesisParameters() Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference">Eventsv2SubscriberInvokeConfigurationKinesisParametersOutputReference</a>

---

##### `LambdaParameters`<sup>Required</sup> <a name="LambdaParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParameters"></a>

```go
func LambdaParameters() Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference">Eventsv2SubscriberInvokeConfigurationLambdaParametersOutputReference</a>

---

##### `SnsParameters`<sup>Required</sup> <a name="SnsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParameters"></a>

```go
func SnsParameters() Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference</a>

---

##### `SqsParameters`<sup>Required</sup> <a name="SqsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParameters"></a>

```go
func SqsParameters() Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference</a>

---

##### `StepFunctionsParameters`<sup>Required</sup> <a name="StepFunctionsParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParameters"></a>

```go
func StepFunctionsParameters() Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference">Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference</a>

---

##### `UniversalTargetParameters`<sup>Required</sup> <a name="UniversalTargetParameters" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParameters"></a>

```go
func UniversalTargetParameters() Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference">Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference</a>

---

##### `EventBusV2ParametersInput`<sup>Optional</sup> <a name="EventBusV2ParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.eventBusV2ParametersInput"></a>

```go
func EventBusV2ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `HttpParametersInput`<sup>Optional</sup> <a name="HttpParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.httpParametersInput"></a>

```go
func HttpParametersInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisParametersInput`<sup>Optional</sup> <a name="KinesisParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.kinesisParametersInput"></a>

```go
func KinesisParametersInput() interface{}
```

- *Type:* interface{}

---

##### `LambdaParametersInput`<sup>Optional</sup> <a name="LambdaParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.lambdaParametersInput"></a>

```go
func LambdaParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SnsParametersInput`<sup>Optional</sup> <a name="SnsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.snsParametersInput"></a>

```go
func SnsParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SqsParametersInput`<sup>Optional</sup> <a name="SqsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.sqsParametersInput"></a>

```go
func SqsParametersInput() interface{}
```

- *Type:* interface{}

---

##### `StepFunctionsParametersInput`<sup>Optional</sup> <a name="StepFunctionsParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.stepFunctionsParametersInput"></a>

```go
func StepFunctionsParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArnInput"></a>

```go
func TargetArnInput() *string
```

- *Type:* *string

---

##### `UniversalTargetParametersInput`<sup>Optional</sup> <a name="UniversalTargetParametersInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.universalTargetParametersInput"></a>

```go
func UniversalTargetParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get"></a>

```go
func Get(key *string) Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```go
func ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```go
func BinaryValueInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSnsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes">PutMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes">ResetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId">ResetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure">ResetMessageStructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageAttributes` <a name="PutMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes"></a>

```go
func PutMessageAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMessageAttributes` <a name="ResetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageAttributes"></a>

```go
func ResetMessageAttributes()
```

##### `ResetMessageDeduplicationId` <a name="ResetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageDeduplicationId"></a>

```go
func ResetMessageDeduplicationId()
```

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageGroupId"></a>

```go
func ResetMessageGroupId()
```

##### `ResetMessageStructure` <a name="ResetMessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetMessageStructure"></a>

```go
func ResetMessageStructure()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.resetSubject"></a>

```go
func ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput">MessageAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput">MessageDeduplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput">MessageStructureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure">MessageStructure</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributes"></a>

```go
func MessageAttributes() Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSnsParametersMessageAttributesMap</a>

---

##### `MessageAttributesInput`<sup>Optional</sup> <a name="MessageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageAttributesInput"></a>

```go
func MessageAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `MessageDeduplicationIdInput`<sup>Optional</sup> <a name="MessageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```go
func MessageDeduplicationIdInput() *string
```

- *Type:* *string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupIdInput"></a>

```go
func MessageGroupIdInput() *string
```

- *Type:* *string

---

##### `MessageStructureInput`<sup>Optional</sup> <a name="MessageStructureInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructureInput"></a>

```go
func MessageStructureInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageDeduplicationId"></a>

```go
func MessageDeduplicationId() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `MessageStructure`<sup>Required</sup> <a name="MessageStructure" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.messageStructure"></a>

```go
func MessageStructure() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSnsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get"></a>

```go
func Get(key *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetBinaryValue"></a>

```go
func ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValueInput"></a>

```go
func BinaryValueInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get"></a>

```go
func Get(key *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue">ResetBinaryValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBinaryValue` <a name="ResetBinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetBinaryValue"></a>

```go
func ResetBinaryValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput">BinaryValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue">BinaryValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BinaryValueInput`<sup>Optional</sup> <a name="BinaryValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValueInput"></a>

```go
func BinaryValueInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BinaryValue`<sup>Required</sup> <a name="BinaryValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.binaryValue"></a>

```go
func BinaryValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationSqsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes">PutMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes">PutMessageSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds">ResetDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes">ResetMessageAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId">ResetMessageDeduplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId">ResetMessageGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes">ResetMessageSystemAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessageAttributes` <a name="PutMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes"></a>

```go
func PutMessageAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMessageSystemAttributes` <a name="PutMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes"></a>

```go
func PutMessageSystemAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.putMessageSystemAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDelaySeconds` <a name="ResetDelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetDelaySeconds"></a>

```go
func ResetDelaySeconds()
```

##### `ResetMessageAttributes` <a name="ResetMessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageAttributes"></a>

```go
func ResetMessageAttributes()
```

##### `ResetMessageDeduplicationId` <a name="ResetMessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageDeduplicationId"></a>

```go
func ResetMessageDeduplicationId()
```

##### `ResetMessageGroupId` <a name="ResetMessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageGroupId"></a>

```go
func ResetMessageGroupId()
```

##### `ResetMessageSystemAttributes` <a name="ResetMessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.resetMessageSystemAttributes"></a>

```go
func ResetMessageSystemAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes">MessageAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes">MessageSystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput">DelaySecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput">MessageAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput">MessageDeduplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput">MessageGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput">MessageSystemAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds">DelaySeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId">MessageDeduplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId">MessageGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageAttributes`<sup>Required</sup> <a name="MessageAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributes"></a>

```go
func MessageAttributes() Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageAttributesMap</a>

---

##### `MessageSystemAttributes`<sup>Required</sup> <a name="MessageSystemAttributes" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributes"></a>

```go
func MessageSystemAttributes() Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap">Eventsv2SubscriberInvokeConfigurationSqsParametersMessageSystemAttributesMap</a>

---

##### `DelaySecondsInput`<sup>Optional</sup> <a name="DelaySecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySecondsInput"></a>

```go
func DelaySecondsInput() *string
```

- *Type:* *string

---

##### `MessageAttributesInput`<sup>Optional</sup> <a name="MessageAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageAttributesInput"></a>

```go
func MessageAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `MessageDeduplicationIdInput`<sup>Optional</sup> <a name="MessageDeduplicationIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationIdInput"></a>

```go
func MessageDeduplicationIdInput() *string
```

- *Type:* *string

---

##### `MessageGroupIdInput`<sup>Optional</sup> <a name="MessageGroupIdInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupIdInput"></a>

```go
func MessageGroupIdInput() *string
```

- *Type:* *string

---

##### `MessageSystemAttributesInput`<sup>Optional</sup> <a name="MessageSystemAttributesInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageSystemAttributesInput"></a>

```go
func MessageSystemAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DelaySeconds`<sup>Required</sup> <a name="DelaySeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.delaySeconds"></a>

```go
func DelaySeconds() *string
```

- *Type:* *string

---

##### `MessageDeduplicationId`<sup>Required</sup> <a name="MessageDeduplicationId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageDeduplicationId"></a>

```go
func MessageDeduplicationId() *string
```

- *Type:* *string

---

##### `MessageGroupId`<sup>Required</sup> <a name="MessageGroupId" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.messageGroupId"></a>

```go
func MessageGroupId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationSqsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType">ResetInvocationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader">ResetTraceHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```go
func ResetInvocationTimeoutSeconds()
```

##### `ResetInvocationType` <a name="ResetInvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetInvocationType"></a>

```go
func ResetInvocationType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTraceHeader` <a name="ResetTraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.resetTraceHeader"></a>

```go
func ResetTraceHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput">InvocationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput">TraceHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType">InvocationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader">TraceHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```go
func InvocationTimeoutSecondsInput() *string
```

- *Type:* *string

---

##### `InvocationTypeInput`<sup>Optional</sup> <a name="InvocationTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTypeInput"></a>

```go
func InvocationTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TraceHeaderInput`<sup>Optional</sup> <a name="TraceHeaderInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeaderInput"></a>

```go
func TraceHeaderInput() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InvocationType`<sup>Required</sup> <a name="InvocationType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.invocationType"></a>

```go
func InvocationType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TraceHeader`<sup>Required</sup> <a name="TraceHeader" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.traceHeader"></a>

```go
func TraceHeader() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationStepFunctionsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference <a name="Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds">ResetInvocationTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetInvocationTimeoutSeconds` <a name="ResetInvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.resetInvocationTimeoutSeconds"></a>

```go
func ResetInvocationTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput">InvocationTimeoutSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds">InvocationTimeoutSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSecondsInput`<sup>Optional</sup> <a name="InvocationTimeoutSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSecondsInput"></a>

```go
func InvocationTimeoutSecondsInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `InvocationTimeoutSeconds`<sup>Required</sup> <a name="InvocationTimeoutSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.invocationTimeoutSeconds"></a>

```go
func InvocationTimeoutSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberInvokeConfigurationUniversalTargetParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberLogConfigurationOutputReference <a name="Eventsv2SubscriberLogConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload">ResetIncludePayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel">ResetLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludePayload` <a name="ResetIncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetIncludePayload"></a>

```go
func ResetIncludePayload()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.resetLevel"></a>

```go
func ResetLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput">IncludePayloadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload">IncludePayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludePayloadInput`<sup>Optional</sup> <a name="IncludePayloadInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayloadInput"></a>

```go
func IncludePayloadInput() *string
```

- *Type:* *string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `IncludePayload`<sup>Required</sup> <a name="IncludePayload" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.includePayload"></a>

```go
func IncludePayload() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberOnFailureConfigurationOutputReference <a name="Eventsv2SubscriberOnFailureConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberOnFailureConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberOnFailureConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberOnFailureConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberPointInTimeConfigurationOutputReference <a name="Eventsv2SubscriberPointInTimeConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberPointInTimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberPointInTimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint">ResetEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType">ResetPointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint">ResetStartingPoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndPoint` <a name="ResetEndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetEndPoint"></a>

```go
func ResetEndPoint()
```

##### `ResetPointType` <a name="ResetPointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetPointType"></a>

```go
func ResetPointType()
```

##### `ResetStartingPoint` <a name="ResetStartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.resetStartingPoint"></a>

```go
func ResetStartingPoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput">EndPointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput">PointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput">StartingPointInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint">EndPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType">PointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint">StartingPoint</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPointInput`<sup>Optional</sup> <a name="EndPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPointInput"></a>

```go
func EndPointInput() *f64
```

- *Type:* *f64

---

##### `PointTypeInput`<sup>Optional</sup> <a name="PointTypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointTypeInput"></a>

```go
func PointTypeInput() *string
```

- *Type:* *string

---

##### `StartingPointInput`<sup>Optional</sup> <a name="StartingPointInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPointInput"></a>

```go
func StartingPointInput() *f64
```

- *Type:* *f64

---

##### `EndPoint`<sup>Required</sup> <a name="EndPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.endPoint"></a>

```go
func EndPoint() *f64
```

- *Type:* *f64

---

##### `PointType`<sup>Required</sup> <a name="PointType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.pointType"></a>

```go
func PointType() *string
```

- *Type:* *string

---

##### `StartingPoint`<sup>Required</sup> <a name="StartingPoint" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.startingPoint"></a>

```go
func StartingPoint() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberPointInTimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberRetryPolicyOutputReference <a name="Eventsv2SubscriberRetryPolicyOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds">ResetMaxEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts">ResetMaxRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy">ResetRetryStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxEventAgeInSeconds` <a name="ResetMaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxEventAgeInSeconds"></a>

```go
func ResetMaxEventAgeInSeconds()
```

##### `ResetMaxRetryAttempts` <a name="ResetMaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetMaxRetryAttempts"></a>

```go
func ResetMaxRetryAttempts()
```

##### `ResetRetryStrategy` <a name="ResetRetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.resetRetryStrategy"></a>

```go
func ResetRetryStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput">MaxEventAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput">MaxRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput">RetryStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds">MaxEventAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts">MaxRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy">RetryStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEventAgeInSecondsInput`<sup>Optional</sup> <a name="MaxEventAgeInSecondsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSecondsInput"></a>

```go
func MaxEventAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryAttemptsInput`<sup>Optional</sup> <a name="MaxRetryAttemptsInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttemptsInput"></a>

```go
func MaxRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `RetryStrategyInput`<sup>Optional</sup> <a name="RetryStrategyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategyInput"></a>

```go
func RetryStrategyInput() *string
```

- *Type:* *string

---

##### `MaxEventAgeInSeconds`<sup>Required</sup> <a name="MaxEventAgeInSeconds" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxEventAgeInSeconds"></a>

```go
func MaxEventAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `MaxRetryAttempts`<sup>Required</sup> <a name="MaxRetryAttempts" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.maxRetryAttempts"></a>

```go
func MaxRetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryStrategy`<sup>Required</sup> <a name="RetryStrategy" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.retryStrategy"></a>

```go
func RetryStrategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberTagsList <a name="Eventsv2SubscriberTagsList" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Eventsv2SubscriberTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get"></a>

```go
func Get(index *f64) Eventsv2SubscriberTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberTagsOutputReference <a name="Eventsv2SubscriberTagsOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Eventsv2SubscriberTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberTransformerJsonataConfigurationOutputReference <a name="Eventsv2SubscriberTransformerJsonataConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberTransformerJsonataConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Eventsv2SubscriberTransformerOutputReference <a name="Eventsv2SubscriberTransformerOutputReference" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsv2subscriber"

eventsv2subscriber.NewEventsv2SubscriberTransformerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Eventsv2SubscriberTransformerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration">PutJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration">ResetJsonataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonataConfiguration` <a name="PutJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration"></a>

```go
func PutJsonataConfiguration(value Eventsv2SubscriberTransformerJsonataConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.putJsonataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfiguration">Eventsv2SubscriberTransformerJsonataConfiguration</a>

---

##### `ResetJsonataConfiguration` <a name="ResetJsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetJsonataConfiguration"></a>

```go
func ResetJsonataConfiguration()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration">JsonataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput">JsonataConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonataConfiguration`<sup>Required</sup> <a name="JsonataConfiguration" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfiguration"></a>

```go
func JsonataConfiguration() Eventsv2SubscriberTransformerJsonataConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerJsonataConfigurationOutputReference">Eventsv2SubscriberTransformerJsonataConfigurationOutputReference</a>

---

##### `JsonataConfigurationInput`<sup>Optional</sup> <a name="JsonataConfigurationInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.jsonataConfigurationInput"></a>

```go
func JsonataConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsv2Subscriber.Eventsv2SubscriberTransformerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



