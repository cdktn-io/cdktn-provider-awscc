# `sagemakerFeatureGroup` Submodule <a name="`sagemakerFeatureGroup` Submodule" id="@cdktn/provider-awscc.sagemakerFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFeatureGroup <a name="SagemakerFeatureGroup" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group awscc_sagemaker_feature_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroup(scope Construct, id *string, config SagemakerFeatureGroupConfig) SagemakerFeatureGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions">PutFeatureDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig">PutOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig">PutOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig">PutThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig">ResetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig">ResetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig">ResetThroughputConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeatureDefinitions` <a name="PutFeatureDefinitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions"></a>

```go
func PutFeatureDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOfflineStoreConfig` <a name="PutOfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig"></a>

```go
func PutOfflineStoreConfig(value SagemakerFeatureGroupOfflineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `PutOnlineStoreConfig` <a name="PutOnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig"></a>

```go
func PutOnlineStoreConfig(value SagemakerFeatureGroupOnlineStoreConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThroughputConfig` <a name="PutThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig"></a>

```go
func PutThroughputConfig(value SagemakerFeatureGroupThroughputConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOfflineStoreConfig` <a name="ResetOfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig"></a>

```go
func ResetOfflineStoreConfig()
```

##### `ResetOnlineStoreConfig` <a name="ResetOnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig"></a>

```go
func ResetOnlineStoreConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThroughputConfig` <a name="ResetThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig"></a>

```go
func ResetThroughputConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerFeatureGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.SagemakerFeatureGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerFeatureGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerFeatureGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitions">FeatureDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList">SagemakerFeatureGroupFeatureDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupStatus">FeatureGroupStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList">SagemakerFeatureGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig">ThroughputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput">EventTimeFeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionsInput">FeatureDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput">FeatureGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput">OfflineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput">OnlineStoreConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput">RecordIdentifierFeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput">ThroughputConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName">FeatureGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `FeatureDefinitions`<sup>Required</sup> <a name="FeatureDefinitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitions"></a>

```go
func FeatureDefinitions() SagemakerFeatureGroupFeatureDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList">SagemakerFeatureGroupFeatureDefinitionsList</a>

---

##### `FeatureGroupStatus`<sup>Required</sup> <a name="FeatureGroupStatus" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupStatus"></a>

```go
func FeatureGroupStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig"></a>

```go
func OfflineStoreConfig() SagemakerFeatureGroupOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig"></a>

```go
func OnlineStoreConfig() SagemakerFeatureGroupOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags"></a>

```go
func Tags() SagemakerFeatureGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList">SagemakerFeatureGroupTagsList</a>

---

##### `ThroughputConfig`<sup>Required</sup> <a name="ThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig"></a>

```go
func ThroughputConfig() SagemakerFeatureGroupThroughputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventTimeFeatureNameInput`<sup>Optional</sup> <a name="EventTimeFeatureNameInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput"></a>

```go
func EventTimeFeatureNameInput() *string
```

- *Type:* *string

---

##### `FeatureDefinitionsInput`<sup>Optional</sup> <a name="FeatureDefinitionsInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionsInput"></a>

```go
func FeatureDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureGroupNameInput`<sup>Optional</sup> <a name="FeatureGroupNameInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput"></a>

```go
func FeatureGroupNameInput() *string
```

- *Type:* *string

---

##### `OfflineStoreConfigInput`<sup>Optional</sup> <a name="OfflineStoreConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput"></a>

```go
func OfflineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OnlineStoreConfigInput`<sup>Optional</sup> <a name="OnlineStoreConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput"></a>

```go
func OnlineStoreConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RecordIdentifierFeatureNameInput`<sup>Optional</sup> <a name="RecordIdentifierFeatureNameInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput"></a>

```go
func RecordIdentifierFeatureNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThroughputConfigInput`<sup>Optional</sup> <a name="ThroughputConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput"></a>

```go
func ThroughputConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName"></a>

```go
func EventTimeFeatureName() *string
```

- *Type:* *string

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName"></a>

```go
func FeatureGroupName() *string
```

- *Type:* *string

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName"></a>

```go
func RecordIdentifierFeatureName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFeatureGroupConfig <a name="SagemakerFeatureGroupConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventTimeFeatureName: *string,
	FeatureDefinitions: interface{},
	FeatureGroupName: *string,
	RecordIdentifierFeatureName: *string,
	Description: *string,
	OfflineStoreConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig,
	OnlineStoreConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig,
	RoleArn: *string,
	Tags: interface{},
	ThroughputConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>*string</code> | The Event Time Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinitions">FeatureDefinitions</a></code> | <code>interface{}</code> | An Array of Feature Definition. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName">FeatureGroupName</a></code> | <code>*string</code> | The Name of the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>*string</code> | The Record Identifier Feature Name. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description">Description</a></code> | <code>*string</code> | Description about the FeatureGroup. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Role Arn. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pair to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig">ThroughputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName"></a>

```go
EventTimeFeatureName *string
```

- *Type:* *string

The Event Time Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}

---

##### `FeatureDefinitions`<sup>Required</sup> <a name="FeatureDefinitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinitions"></a>

```go
FeatureDefinitions interface{}
```

- *Type:* interface{}

An Array of Feature Definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_definitions SagemakerFeatureGroup#feature_definitions}

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName"></a>

```go
FeatureGroupName *string
```

- *Type:* *string

The Name of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName"></a>

```go
RecordIdentifierFeatureName *string
```

- *Type:* *string

The Record Identifier Feature Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description about the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}

---

##### `OfflineStoreConfig`<sup>Optional</sup> <a name="OfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig"></a>

```go
OfflineStoreConfig SagemakerFeatureGroupOfflineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}.

---

##### `OnlineStoreConfig`<sup>Optional</sup> <a name="OnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig"></a>

```go
OnlineStoreConfig SagemakerFeatureGroupOnlineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Role Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pair to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}

---

##### `ThroughputConfig`<sup>Optional</sup> <a name="ThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig"></a>

```go
ThroughputConfig SagemakerFeatureGroupThroughputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}.

---

### SagemakerFeatureGroupFeatureDefinitions <a name="SagemakerFeatureGroupFeatureDefinitions" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupFeatureDefinitions {
	FeatureName: *string,
	FeatureType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureName">FeatureName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureType">FeatureType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}. |

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureName"></a>

```go
FeatureName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}.

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitions.property.featureType"></a>

```go
FeatureType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}.

---

### SagemakerFeatureGroupOfflineStoreConfig <a name="SagemakerFeatureGroupOfflineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfig {
	DataCatalogConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig,
	DisableGlueTableCreation: interface{},
	S3StorageConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig,
	TableFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat">TableFormat</a></code> | <code>*string</code> | Format for the offline store feature group. |

---

##### `DataCatalogConfig`<sup>Optional</sup> <a name="DataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig"></a>

```go
DataCatalogConfig SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}.

---

##### `DisableGlueTableCreation`<sup>Optional</sup> <a name="DisableGlueTableCreation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation"></a>

```go
DisableGlueTableCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

##### `S3StorageConfig`<sup>Optional</sup> <a name="S3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig"></a>

```go
S3StorageConfig SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}.

---

##### `TableFormat`<sup>Optional</sup> <a name="TableFormat" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat"></a>

```go
TableFormat *string
```

- *Type:* *string

Format for the offline store feature group.

Iceberg is the optimal format for feature groups shared between offline and online stores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}

---

### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
	Catalog: *string,
	Database: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
	KmsKeyId: *string,
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

### SagemakerFeatureGroupOnlineStoreConfig <a name="SagemakerFeatureGroupOnlineStoreConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOnlineStoreConfig {
	EnableOnlineStore: interface{},
	SecurityConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig,
	StorageType: *string,
	TtlDuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration">TtlDuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | TTL configuration of the feature group. |

---

##### `EnableOnlineStore`<sup>Optional</sup> <a name="EnableOnlineStore" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore"></a>

```go
EnableOnlineStore interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

##### `SecurityConfig`<sup>Optional</sup> <a name="SecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig"></a>

```go
SecurityConfig SagemakerFeatureGroupOnlineStoreConfigSecurityConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}.

---

##### `TtlDuration`<sup>Optional</sup> <a name="TtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration"></a>

```go
TtlDuration SagemakerFeatureGroupOnlineStoreConfigTtlDuration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

TTL configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}

---

### SagemakerFeatureGroupOnlineStoreConfigSecurityConfig <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

### SagemakerFeatureGroupOnlineStoreConfigTtlDuration <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration {
	Unit: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit">Unit</a></code> | <code>*string</code> | Unit of ttl configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value">Value</a></code> | <code>*f64</code> | Value of ttl configuration. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Unit of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Value of ttl configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}

---

### SagemakerFeatureGroupTags <a name="SagemakerFeatureGroupTags" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#key SagemakerFeatureGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#key SagemakerFeatureGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}.

---

### SagemakerFeatureGroupThroughputConfig <a name="SagemakerFeatureGroupThroughputConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

&sagemakerfeaturegroup.SagemakerFeatureGroupThroughputConfig {
	ProvisionedReadCapacityUnits: *f64,
	ProvisionedWriteCapacityUnits: *f64,
	ThroughputMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits">ProvisionedReadCapacityUnits</a></code> | <code>*f64</code> | For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits">ProvisionedWriteCapacityUnits</a></code> | <code>*f64</code> | For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | Throughput mode configuration of the feature group. |

---

##### `ProvisionedReadCapacityUnits`<sup>Optional</sup> <a name="ProvisionedReadCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits"></a>

```go
ProvisionedReadCapacityUnits *f64
```

- *Type:* *f64

For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}

---

##### `ProvisionedWriteCapacityUnits`<sup>Optional</sup> <a name="ProvisionedWriteCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits"></a>

```go
ProvisionedWriteCapacityUnits *f64
```

- *Type:* *f64

For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode"></a>

```go
ThroughputMode *string
```

- *Type:* *string

Throughput mode configuration of the feature group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFeatureGroupFeatureDefinitionsList <a name="SagemakerFeatureGroupFeatureDefinitionsList" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupFeatureDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerFeatureGroupFeatureDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get"></a>

```go
func Get(index *f64) SagemakerFeatureGroupFeatureDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupFeatureDefinitionsOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupFeatureDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerFeatureGroupFeatureDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureName">FeatureName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureType">FeatureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureNameInput"></a>

```go
func FeatureNameInput() *string
```

- *Type:* *string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureTypeInput"></a>

```go
func FeatureTypeInput() *string
```

- *Type:* *string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureName"></a>

```go
func FeatureName() *string
```

- *Type:* *string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.featureType"></a>

```go
func FeatureType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOfflineStoreConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig">PutDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig">PutS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig">ResetDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation">ResetDisableGlueTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetS3StorageConfig">ResetS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat">ResetTableFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCatalogConfig` <a name="PutDataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig"></a>

```go
func PutDataCatalogConfig(value SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `PutS3StorageConfig` <a name="PutS3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig"></a>

```go
func PutS3StorageConfig(value SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `ResetDataCatalogConfig` <a name="ResetDataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig"></a>

```go
func ResetDataCatalogConfig()
```

##### `ResetDisableGlueTableCreation` <a name="ResetDisableGlueTableCreation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation"></a>

```go
func ResetDisableGlueTableCreation()
```

##### `ResetS3StorageConfig` <a name="ResetS3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetS3StorageConfig"></a>

```go
func ResetS3StorageConfig()
```

##### `ResetTableFormat` <a name="ResetTableFormat" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat"></a>

```go
func ResetTableFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput">DataCatalogConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput">DisableGlueTableCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput">S3StorageConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput">TableFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat">TableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataCatalogConfig`<sup>Required</sup> <a name="DataCatalogConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig"></a>

```go
func DataCatalogConfig() SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a>

---

##### `S3StorageConfig`<sup>Required</sup> <a name="S3StorageConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig"></a>

```go
func S3StorageConfig() SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a>

---

##### `DataCatalogConfigInput`<sup>Optional</sup> <a name="DataCatalogConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput"></a>

```go
func DataCatalogConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DisableGlueTableCreationInput`<sup>Optional</sup> <a name="DisableGlueTableCreationInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput"></a>

```go
func DisableGlueTableCreationInput() interface{}
```

- *Type:* interface{}

---

##### `S3StorageConfigInput`<sup>Optional</sup> <a name="S3StorageConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput"></a>

```go
func S3StorageConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TableFormatInput`<sup>Optional</sup> <a name="TableFormatInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput"></a>

```go
func TableFormatInput() *string
```

- *Type:* *string

---

##### `DisableGlueTableCreation`<sup>Required</sup> <a name="DisableGlueTableCreation" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation"></a>

```go
func DisableGlueTableCreation() interface{}
```

- *Type:* interface{}

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat"></a>

```go
func TableFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOnlineStoreConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOnlineStoreConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOnlineStoreConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig">PutSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration">PutTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore">ResetEnableOnlineStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig">ResetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration">ResetTtlDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityConfig` <a name="PutSecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig"></a>

```go
func PutSecurityConfig(value SagemakerFeatureGroupOnlineStoreConfigSecurityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `PutTtlDuration` <a name="PutTtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration"></a>

```go
func PutTtlDuration(value SagemakerFeatureGroupOnlineStoreConfigTtlDuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `ResetEnableOnlineStore` <a name="ResetEnableOnlineStore" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore"></a>

```go
func ResetEnableOnlineStore()
```

##### `ResetSecurityConfig` <a name="ResetSecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig"></a>

```go
func ResetSecurityConfig()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTtlDuration` <a name="ResetTtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration"></a>

```go
func ResetTtlDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration">TtlDuration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput">EnableOnlineStoreInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput">SecurityConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput">TtlDurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityConfig`<sup>Required</sup> <a name="SecurityConfig" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig"></a>

```go
func SecurityConfig() SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a>

---

##### `TtlDuration`<sup>Required</sup> <a name="TtlDuration" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration"></a>

```go
func TtlDuration() SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a>

---

##### `EnableOnlineStoreInput`<sup>Optional</sup> <a name="EnableOnlineStoreInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput"></a>

```go
func EnableOnlineStoreInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityConfigInput`<sup>Optional</sup> <a name="SecurityConfigInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput"></a>

```go
func SecurityConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TtlDurationInput`<sup>Optional</sup> <a name="TtlDurationInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput"></a>

```go
func TtlDurationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableOnlineStore`<sup>Required</sup> <a name="EnableOnlineStore" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore"></a>

```go
func EnableOnlineStore() interface{}
```

- *Type:* interface{}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit"></a>

```go
func ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupTagsList <a name="SagemakerFeatureGroupTagsList" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerFeatureGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get"></a>

```go
func Get(index *f64) SagemakerFeatureGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupTagsOutputReference <a name="SagemakerFeatureGroupTagsOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerFeatureGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerFeatureGroupThroughputConfigOutputReference <a name="SagemakerFeatureGroupThroughputConfigOutputReference" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerfeaturegroup"

sagemakerfeaturegroup.NewSagemakerFeatureGroupThroughputConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerFeatureGroupThroughputConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits">ResetProvisionedReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits">ResetProvisionedWriteCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisionedReadCapacityUnits` <a name="ResetProvisionedReadCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits"></a>

```go
func ResetProvisionedReadCapacityUnits()
```

##### `ResetProvisionedWriteCapacityUnits` <a name="ResetProvisionedWriteCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits"></a>

```go
func ResetProvisionedWriteCapacityUnits()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode"></a>

```go
func ResetThroughputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput">ProvisionedReadCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput">ProvisionedWriteCapacityUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput">ThroughputModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits">ProvisionedReadCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits">ProvisionedWriteCapacityUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode">ThroughputMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProvisionedReadCapacityUnitsInput`<sup>Optional</sup> <a name="ProvisionedReadCapacityUnitsInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput"></a>

```go
func ProvisionedReadCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ProvisionedWriteCapacityUnitsInput`<sup>Optional</sup> <a name="ProvisionedWriteCapacityUnitsInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput"></a>

```go
func ProvisionedWriteCapacityUnitsInput() *f64
```

- *Type:* *f64

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput"></a>

```go
func ThroughputModeInput() *string
```

- *Type:* *string

---

##### `ProvisionedReadCapacityUnits`<sup>Required</sup> <a name="ProvisionedReadCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits"></a>

```go
func ProvisionedReadCapacityUnits() *f64
```

- *Type:* *f64

---

##### `ProvisionedWriteCapacityUnits`<sup>Required</sup> <a name="ProvisionedWriteCapacityUnits" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits"></a>

```go
func ProvisionedWriteCapacityUnits() *f64
```

- *Type:* *f64

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode"></a>

```go
func ThroughputMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



