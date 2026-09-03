# `snsTopic` Submodule <a name="`snsTopic` Submodule" id="@cdktn/provider-awscc.snsTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopic <a name="SnsTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic awscc_sns_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopic(scope Construct, id *string, config SnsTopicConfig) SnsTopic
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.snsTopic.SnsTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig">SnsTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging">PutDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription">PutSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy">ResetArchivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication">ResetContentBasedDeduplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy">ResetDataProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging">ResetDeliveryStatusLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope">ResetFifoThroughputScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic">ResetFifoTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion">ResetSignatureVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription">ResetSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName">ResetTopicName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig">ResetTracingConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsTopic.SnsTopic.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.snsTopic.SnsTopic.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.snsTopic.SnsTopic.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeliveryStatusLogging` <a name="PutDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging"></a>

```go
func PutDeliveryStatusLogging(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putDeliveryStatusLogging.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSubscription` <a name="PutSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription"></a>

```go
func PutSubscription(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putSubscription.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsTopic.SnsTopic.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchivePolicy` <a name="ResetArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetArchivePolicy"></a>

```go
func ResetArchivePolicy()
```

##### `ResetContentBasedDeduplication` <a name="ResetContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetContentBasedDeduplication"></a>

```go
func ResetContentBasedDeduplication()
```

##### `ResetDataProtectionPolicy` <a name="ResetDataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDataProtectionPolicy"></a>

```go
func ResetDataProtectionPolicy()
```

##### `ResetDeliveryStatusLogging` <a name="ResetDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDeliveryStatusLogging"></a>

```go
func ResetDeliveryStatusLogging()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFifoThroughputScope` <a name="ResetFifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoThroughputScope"></a>

```go
func ResetFifoThroughputScope()
```

##### `ResetFifoTopic` <a name="ResetFifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetFifoTopic"></a>

```go
func ResetFifoTopic()
```

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```

##### `ResetSignatureVersion` <a name="ResetSignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSignatureVersion"></a>

```go
func ResetSignatureVersion()
```

##### `ResetSubscription` <a name="ResetSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetSubscription"></a>

```go
func ResetSubscription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTopicName` <a name="ResetTopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTopicName"></a>

```go
func ResetTopicName()
```

##### `ResetTracingConfig` <a name="ResetTracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.resetTracingConfig"></a>

```go
func ResetTracingConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.SnsTopic_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.SnsTopic_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.SnsTopic_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsTopic.SnsTopic.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.SnsTopic_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SnsTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SnsTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SnsTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging">DeliveryStatusLogging</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription">Subscription</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput">ArchivePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput">ContentBasedDeduplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput">DataProtectionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput">DeliveryStatusLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput">FifoThroughputScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput">FifoTopicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput">SignatureVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput">SubscriptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput">TopicNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput">TracingConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy">ArchivePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy">DataProtectionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic">FifoTopic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion">SignatureVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName">TopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig">TracingConfig</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeliveryStatusLogging`<sup>Required</sup> <a name="DeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLogging"></a>

```go
func DeliveryStatusLogging() SnsTopicDeliveryStatusLoggingList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList">SnsTopicDeliveryStatusLoggingList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Subscription`<sup>Required</sup> <a name="Subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscription"></a>

```go
func Subscription() SnsTopicSubscriptionList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList">SnsTopicSubscriptionList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tags"></a>

```go
func Tags() SnsTopicTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList">SnsTopicTagsList</a>

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

##### `ArchivePolicyInput`<sup>Optional</sup> <a name="ArchivePolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicyInput"></a>

```go
func ArchivePolicyInput() *string
```

- *Type:* *string

---

##### `ContentBasedDeduplicationInput`<sup>Optional</sup> <a name="ContentBasedDeduplicationInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplicationInput"></a>

```go
func ContentBasedDeduplicationInput() interface{}
```

- *Type:* interface{}

---

##### `DataProtectionPolicyInput`<sup>Optional</sup> <a name="DataProtectionPolicyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicyInput"></a>

```go
func DataProtectionPolicyInput() *string
```

- *Type:* *string

---

##### `DeliveryStatusLoggingInput`<sup>Optional</sup> <a name="DeliveryStatusLoggingInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.deliveryStatusLoggingInput"></a>

```go
func DeliveryStatusLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FifoThroughputScopeInput`<sup>Optional</sup> <a name="FifoThroughputScopeInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScopeInput"></a>

```go
func FifoThroughputScopeInput() *string
```

- *Type:* *string

---

##### `FifoTopicInput`<sup>Optional</sup> <a name="FifoTopicInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopicInput"></a>

```go
func FifoTopicInput() interface{}
```

- *Type:* interface{}

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `SignatureVersionInput`<sup>Optional</sup> <a name="SignatureVersionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersionInput"></a>

```go
func SignatureVersionInput() *string
```

- *Type:* *string

---

##### `SubscriptionInput`<sup>Optional</sup> <a name="SubscriptionInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.subscriptionInput"></a>

```go
func SubscriptionInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicNameInput"></a>

```go
func TopicNameInput() *string
```

- *Type:* *string

---

##### `TracingConfigInput`<sup>Optional</sup> <a name="TracingConfigInput" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfigInput"></a>

```go
func TracingConfigInput() *string
```

- *Type:* *string

---

##### `ArchivePolicy`<sup>Required</sup> <a name="ArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.archivePolicy"></a>

```go
func ArchivePolicy() *string
```

- *Type:* *string

---

##### `ContentBasedDeduplication`<sup>Required</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.contentBasedDeduplication"></a>

```go
func ContentBasedDeduplication() interface{}
```

- *Type:* interface{}

---

##### `DataProtectionPolicy`<sup>Required</sup> <a name="DataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.dataProtectionPolicy"></a>

```go
func DataProtectionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FifoThroughputScope`<sup>Required</sup> <a name="FifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoThroughputScope"></a>

```go
func FifoThroughputScope() *string
```

- *Type:* *string

---

##### `FifoTopic`<sup>Required</sup> <a name="FifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.fifoTopic"></a>

```go
func FifoTopic() interface{}
```

- *Type:* interface{}

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `SignatureVersion`<sup>Required</sup> <a name="SignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.signatureVersion"></a>

```go
func SignatureVersion() *string
```

- *Type:* *string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.topicName"></a>

```go
func TopicName() *string
```

- *Type:* *string

---

##### `TracingConfig`<sup>Required</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tracingConfig"></a>

```go
func TracingConfig() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.snsTopic.SnsTopic.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicConfig <a name="SnsTopicConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

&snstopic.SnsTopicConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArchivePolicy: *string,
	ContentBasedDeduplication: interface{},
	DataProtectionPolicy: *string,
	DeliveryStatusLogging: interface{},
	DisplayName: *string,
	FifoThroughputScope: *string,
	FifoTopic: interface{},
	KmsMasterKeyId: *string,
	SignatureVersion: *string,
	Subscription: interface{},
	Tags: interface{},
	TopicName: *string,
	TracingConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy">ArchivePolicy</a></code> | <code>*string</code> | The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication">ContentBasedDeduplication</a></code> | <code>interface{}</code> | ``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy">DataProtectionPolicy</a></code> | <code>*string</code> | The body of the policy document you want to use for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging">DeliveryStatusLogging</a></code> | <code>interface{}</code> | The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name to use for an SNS topic with SMS subscriptions. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope">FifoThroughputScope</a></code> | <code>*string</code> | Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic">FifoTopic</a></code> | <code>interface{}</code> | Set to true to create a FIFO topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion">SignatureVersion</a></code> | <code>*string</code> | The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription">Subscription</a></code> | <code>interface{}</code> | The SNS subscriptions (endpoints) for this topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The list of tags to add to a new topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName">TopicName</a></code> | <code>*string</code> | The name of the topic you want to create. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig">TracingConfig</a></code> | <code>*string</code> | Tracing mode of an SNS topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArchivePolicy`<sup>Optional</sup> <a name="ArchivePolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.archivePolicy"></a>

```go
ArchivePolicy *string
```

- *Type:* *string

The ``ArchivePolicy`` determines the number of days SNS retains messages in FIFO topics.

You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#archive_policy SnsTopic#archive_policy}

---

##### `ContentBasedDeduplication`<sup>Optional</sup> <a name="ContentBasedDeduplication" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.contentBasedDeduplication"></a>

```go
ContentBasedDeduplication interface{}
```

- *Type:* interface{}

``ContentBasedDeduplication`` enables deduplication of messages based on their content for FIFO topics.

By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#content_based_deduplication SnsTopic#content_based_deduplication}

---

##### `DataProtectionPolicy`<sup>Optional</sup> <a name="DataProtectionPolicy" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.dataProtectionPolicy"></a>

```go
DataProtectionPolicy *string
```

- *Type:* *string

The body of the policy document you want to use for this topic.

You can only add one policy per topic.
The policy must be in JSON string format.
Length Constraints: Maximum length of 30,720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#data_protection_policy SnsTopic#data_protection_policy}

---

##### `DeliveryStatusLogging`<sup>Optional</sup> <a name="DeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.deliveryStatusLogging"></a>

```go
DeliveryStatusLogging interface{}
```

- *Type:* interface{}

The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:   +  HTTP    +  Amazon Kinesis Data Firehose   +  AWS Lambda   +  Platform application endpoint   +  Amazon Simple Queue Service     Once configured, log entries are sent to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#delivery_status_logging SnsTopic#delivery_status_logging}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name to use for an SNS topic with SMS subscriptions.

The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#display_name SnsTopic#display_name}

---

##### `FifoThroughputScope`<sup>Optional</sup> <a name="FifoThroughputScope" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoThroughputScope"></a>

```go
FifoThroughputScope *string
```

- *Type:* *string

Specifies the throughput quota and deduplication behavior to apply for the FIFO topic. Valid values are ``Topic`` or ``MessageGroup``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#fifo_throughput_scope SnsTopic#fifo_throughput_scope}

---

##### `FifoTopic`<sup>Optional</sup> <a name="FifoTopic" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.fifoTopic"></a>

```go
FifoTopic interface{}
```

- *Type:* interface{}

Set to true to create a FIFO topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#fifo_topic SnsTopic#fifo_topic}

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK.

For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see `KeyId` in the *API Reference*.
This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#kms_master_key_id SnsTopic#kms_master_key_id}

---

##### `SignatureVersion`<sup>Optional</sup> <a name="SignatureVersion" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.signatureVersion"></a>

```go
SignatureVersion *string
```

- *Type:* *string

The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.

By default, `SignatureVersion` is set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#signature_version SnsTopic#signature_version}

---

##### `Subscription`<sup>Optional</sup> <a name="Subscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.subscription"></a>

```go
Subscription interface{}
```

- *Type:* interface{}

The SNS subscriptions (endpoints) for this topic.

If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#subscription SnsTopic#subscription}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The list of tags to add to a new topic.

To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#tags SnsTopic#tags}

---

##### `TopicName`<sup>Optional</sup> <a name="TopicName" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.topicName"></a>

```go
TopicName *string
```

- *Type:* *string

The name of the topic you want to create.

Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo`.
If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#topic_name SnsTopic#topic_name}

---

##### `TracingConfig`<sup>Optional</sup> <a name="TracingConfig" id="@cdktn/provider-awscc.snsTopic.SnsTopicConfig.property.tracingConfig"></a>

```go
TracingConfig *string
```

- *Type:* *string

Tracing mode of an SNS topic.

By default `TracingConfig` is set to `PassThrough`, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to `Active`, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#tracing_config SnsTopic#tracing_config}

---

### SnsTopicDeliveryStatusLogging <a name="SnsTopicDeliveryStatusLogging" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

&snstopic.SnsTopicDeliveryStatusLogging {
	FailureFeedbackRoleArn: *string,
	Protocol: *string,
	SuccessFeedbackRoleArn: *string,
	SuccessFeedbackSampleRate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>*string</code> | The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol">Protocol</a></code> | <code>*string</code> | Indicates one of the supported protocols for the Amazon SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>*string</code> | The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>*string</code> | The percentage of successful message deliveries to be logged in Amazon CloudWatch. |

---

##### `FailureFeedbackRoleArn`<sup>Optional</sup> <a name="FailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.failureFeedbackRoleArn"></a>

```go
FailureFeedbackRoleArn *string
```

- *Type:* *string

The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#failure_feedback_role_arn SnsTopic#failure_feedback_role_arn}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Indicates one of the supported protocols for the Amazon SNS topic.

At least one of the other three `LoggingConfig` properties is recommend along with `Protocol`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

##### `SuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackRoleArn"></a>

```go
SuccessFeedbackRoleArn *string
```

- *Type:* *string

The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#success_feedback_role_arn SnsTopic#success_feedback_role_arn}

---

##### `SuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLogging.property.successFeedbackSampleRate"></a>

```go
SuccessFeedbackSampleRate *string
```

- *Type:* *string

The percentage of successful message deliveries to be logged in Amazon CloudWatch.

Valid percentage values range from 0 to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#success_feedback_sample_rate SnsTopic#success_feedback_sample_rate}

---

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

&snstopic.SnsTopicSubscription {
	Endpoint: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint">Endpoint</a></code> | <code>*string</code> | The endpoint that receives notifications from the SNS topic. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol">Protocol</a></code> | <code>*string</code> | The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The endpoint that receives notifications from the SNS topic.

The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `Subscribe` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#endpoint SnsTopic#endpoint}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscription.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#protocol SnsTopic#protocol}

---

### SnsTopicTags <a name="SnsTopicTags" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

&snstopic.SnsTopicTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key">Key</a></code> | <code>*string</code> | The required key portion of the tag. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value">Value</a></code> | <code>*string</code> | The optional value portion of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The required key portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#key SnsTopic#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The optional value portion of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sns_topic#value SnsTopic#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SnsTopicDeliveryStatusLoggingList <a name="SnsTopicDeliveryStatusLoggingList" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicDeliveryStatusLoggingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SnsTopicDeliveryStatusLoggingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get"></a>

```go
func Get(index *f64) SnsTopicDeliveryStatusLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SnsTopicDeliveryStatusLoggingOutputReference <a name="SnsTopicDeliveryStatusLoggingOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicDeliveryStatusLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SnsTopicDeliveryStatusLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn">ResetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn">ResetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate">ResetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailureFeedbackRoleArn` <a name="ResetFailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetFailureFeedbackRoleArn"></a>

```go
func ResetFailureFeedbackRoleArn()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSuccessFeedbackRoleArn` <a name="ResetSuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackRoleArn"></a>

```go
func ResetSuccessFeedbackRoleArn()
```

##### `ResetSuccessFeedbackSampleRate` <a name="ResetSuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.resetSuccessFeedbackSampleRate"></a>

```go
func ResetSuccessFeedbackSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput">FailureFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput">SuccessFeedbackRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput">SuccessFeedbackSampleRateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FailureFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArnInput"></a>

```go
func FailureFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SuccessFeedbackRoleArnInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArnInput"></a>

```go
func SuccessFeedbackRoleArnInput() *string
```

- *Type:* *string

---

##### `SuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SuccessFeedbackSampleRateInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRateInput"></a>

```go
func SuccessFeedbackSampleRateInput() *string
```

- *Type:* *string

---

##### `FailureFeedbackRoleArn`<sup>Required</sup> <a name="FailureFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.failureFeedbackRoleArn"></a>

```go
func FailureFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SuccessFeedbackRoleArn`<sup>Required</sup> <a name="SuccessFeedbackRoleArn" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackRoleArn"></a>

```go
func SuccessFeedbackRoleArn() *string
```

- *Type:* *string

---

##### `SuccessFeedbackSampleRate`<sup>Required</sup> <a name="SuccessFeedbackSampleRate" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.successFeedbackSampleRate"></a>

```go
func SuccessFeedbackSampleRate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicDeliveryStatusLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SnsTopicSubscriptionList <a name="SnsTopicSubscriptionList" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicSubscriptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SnsTopicSubscriptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get"></a>

```go
func Get(index *f64) SnsTopicSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SnsTopicSubscriptionOutputReference <a name="SnsTopicSubscriptionOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SnsTopicSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SnsTopicTagsList <a name="SnsTopicTagsList" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SnsTopicTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get"></a>

```go
func Get(index *f64) SnsTopicTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SnsTopicTagsOutputReference <a name="SnsTopicTagsOutputReference" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snstopic"

snstopic.NewSnsTopicTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SnsTopicTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.snsTopic.SnsTopicTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



