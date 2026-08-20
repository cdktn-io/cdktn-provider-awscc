# `iotanalyticsDataset` Submodule <a name="`iotanalyticsDataset` Submodule" id="@cdktn/provider-awscc.iotanalyticsDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsDataset <a name="IotanalyticsDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset awscc_iotanalytics_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDataset(scope Construct, id *string, config IotanalyticsDatasetConfig) IotanalyticsDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig">IotanalyticsDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig">IotanalyticsDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules">PutContentDeliveryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules">PutLateDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod">PutRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers">PutTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration">PutVersioningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules">ResetContentDeliveryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName">ResetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules">ResetLateDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers">ResetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration">ResetVersioningConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutContentDeliveryRules` <a name="PutContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules"></a>

```go
func PutContentDeliveryRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putContentDeliveryRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLateDataRules` <a name="PutLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules"></a>

```go
func PutLateDataRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putLateDataRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRetentionPeriod` <a name="PutRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod"></a>

```go
func PutRetentionPeriod(value IotanalyticsDatasetRetentionPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTriggers` <a name="PutTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers"></a>

```go
func PutTriggers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putTriggers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVersioningConfiguration` <a name="PutVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration"></a>

```go
func PutVersioningConfiguration(value IotanalyticsDatasetVersioningConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.putVersioningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

---

##### `ResetContentDeliveryRules` <a name="ResetContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetContentDeliveryRules"></a>

```go
func ResetContentDeliveryRules()
```

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetDatasetName"></a>

```go
func ResetDatasetName()
```

##### `ResetLateDataRules` <a name="ResetLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetLateDataRules"></a>

```go
func ResetLateDataRules()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetTriggers"></a>

```go
func ResetTriggers()
```

##### `ResetVersioningConfiguration` <a name="ResetVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.resetVersioningConfiguration"></a>

```go
func ResetVersioningConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.IotanalyticsDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.IotanalyticsDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.IotanalyticsDataset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.IotanalyticsDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotanalyticsDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotanalyticsDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotanalyticsDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules">ContentDeliveryRules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules">LateDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers">Triggers</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration">VersioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput">ContentDeliveryRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput">DatasetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput">LateDataRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput">TriggersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput">VersioningConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actions"></a>

```go
func Actions() IotanalyticsDatasetActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList">IotanalyticsDatasetActionsList</a>

---

##### `ContentDeliveryRules`<sup>Required</sup> <a name="ContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRules"></a>

```go
func ContentDeliveryRules() IotanalyticsDatasetContentDeliveryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList">IotanalyticsDatasetContentDeliveryRulesList</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LateDataRules`<sup>Required</sup> <a name="LateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRules"></a>

```go
func LateDataRules() IotanalyticsDatasetLateDataRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList">IotanalyticsDatasetLateDataRulesList</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriod"></a>

```go
func RetentionPeriod() IotanalyticsDatasetRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference">IotanalyticsDatasetRetentionPeriodOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tags"></a>

```go
func Tags() IotanalyticsDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList">IotanalyticsDatasetTagsList</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggers"></a>

```go
func Triggers() IotanalyticsDatasetTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList">IotanalyticsDatasetTriggersList</a>

---

##### `VersioningConfiguration`<sup>Required</sup> <a name="VersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfiguration"></a>

```go
func VersioningConfiguration() IotanalyticsDatasetVersioningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference">IotanalyticsDatasetVersioningConfigurationOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentDeliveryRulesInput`<sup>Optional</sup> <a name="ContentDeliveryRulesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.contentDeliveryRulesInput"></a>

```go
func ContentDeliveryRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetNameInput"></a>

```go
func DatasetNameInput() *string
```

- *Type:* *string

---

##### `LateDataRulesInput`<sup>Optional</sup> <a name="LateDataRulesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.lateDataRulesInput"></a>

```go
func LateDataRulesInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.triggersInput"></a>

```go
func TriggersInput() interface{}
```

- *Type:* interface{}

---

##### `VersioningConfigurationInput`<sup>Optional</sup> <a name="VersioningConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.versioningConfigurationInput"></a>

```go
func VersioningConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsDatasetActions <a name="IotanalyticsDatasetActions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActions {
	ActionName: *string,
	ContainerAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction,
	QueryAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction">ContainerAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction">QueryAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#action_name IotanalyticsDataset#action_name}.

---

##### `ContainerAction`<sup>Optional</sup> <a name="ContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.containerAction"></a>

```go
ContainerAction IotanalyticsDatasetActionsContainerAction
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#container_action IotanalyticsDataset#container_action}.

---

##### `QueryAction`<sup>Optional</sup> <a name="QueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActions.property.queryAction"></a>

```go
QueryAction IotanalyticsDatasetActionsQueryAction
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#query_action IotanalyticsDataset#query_action}.

---

### IotanalyticsDatasetActionsContainerAction <a name="IotanalyticsDatasetActionsContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsContainerAction {
	ExecutionRoleArn: *string,
	Image: *string,
	ResourceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration,
	Variables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables">Variables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}. |

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#execution_role_arn IotanalyticsDataset#execution_role_arn}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#image IotanalyticsDataset#image}.

---

##### `ResourceConfiguration`<sup>Optional</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.resourceConfiguration"></a>

```go
ResourceConfiguration IotanalyticsDatasetActionsContainerActionResourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#resource_configuration IotanalyticsDataset#resource_configuration}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction.property.variables"></a>

```go
Variables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variables IotanalyticsDataset#variables}.

---

### IotanalyticsDatasetActionsContainerActionResourceConfiguration <a name="IotanalyticsDatasetActionsContainerActionResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration {
	ComputeType: *string,
	VolumeSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType">ComputeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}. |

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.computeType"></a>

```go
ComputeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#compute_type IotanalyticsDataset#compute_type}.

---

##### `VolumeSizeInGb`<sup>Optional</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration.property.volumeSizeInGb"></a>

```go
VolumeSizeInGb *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#volume_size_in_gb IotanalyticsDataset#volume_size_in_gb}.

---

### IotanalyticsDatasetActionsContainerActionVariables <a name="IotanalyticsDatasetActionsContainerActionVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsContainerActionVariables {
	DatasetContentVersionValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue,
	DoubleValue: *f64,
	OutputFileUriValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue,
	StringValue: *string,
	VariableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue">DatasetContentVersionValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue">OutputFileUriValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName">VariableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}. |

---

##### `DatasetContentVersionValue`<sup>Optional</sup> <a name="DatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.datasetContentVersionValue"></a>

```go
DatasetContentVersionValue IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_content_version_value IotanalyticsDataset#dataset_content_version_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#double_value IotanalyticsDataset#double_value}.

---

##### `OutputFileUriValue`<sup>Optional</sup> <a name="OutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.outputFileUriValue"></a>

```go
OutputFileUriValue IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#output_file_uri_value IotanalyticsDataset#output_file_uri_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#string_value IotanalyticsDataset#string_value}.

---

##### `VariableName`<sup>Optional</sup> <a name="VariableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariables.property.variableName"></a>

```go
VariableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#variable_name IotanalyticsDataset#variable_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue {
	DatasetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName">DatasetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.property.datasetName"></a>

```go
DatasetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue {
	FileName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName">FileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.property.fileName"></a>

```go
FileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#file_name IotanalyticsDataset#file_name}.

---

### IotanalyticsDatasetActionsQueryAction <a name="IotanalyticsDatasetActionsQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsQueryAction {
	Filters: interface{},
	SqlQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters">Filters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#filters IotanalyticsDataset#filters}.

---

##### `SqlQuery`<sup>Optional</sup> <a name="SqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction.property.sqlQuery"></a>

```go
SqlQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#sql_query IotanalyticsDataset#sql_query}.

---

### IotanalyticsDatasetActionsQueryActionFilters <a name="IotanalyticsDatasetActionsQueryActionFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsQueryActionFilters {
	DeltaTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime">DeltaTime</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}. |

---

##### `DeltaTime`<sup>Optional</sup> <a name="DeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFilters.property.deltaTime"></a>

```go
DeltaTime IotanalyticsDatasetActionsQueryActionFiltersDeltaTime
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time IotanalyticsDataset#delta_time}.

---

### IotanalyticsDatasetActionsQueryActionFiltersDeltaTime <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime {
	OffsetSeconds: *f64,
	TimeExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds">OffsetSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression">TimeExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}. |

---

##### `OffsetSeconds`<sup>Optional</sup> <a name="OffsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.offsetSeconds"></a>

```go
OffsetSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#offset_seconds IotanalyticsDataset#offset_seconds}.

---

##### `TimeExpression`<sup>Optional</sup> <a name="TimeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime.property.timeExpression"></a>

```go
TimeExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#time_expression IotanalyticsDataset#time_expression}.

---

### IotanalyticsDatasetConfig <a name="IotanalyticsDatasetConfig" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: interface{},
	ContentDeliveryRules: interface{},
	DatasetName: *string,
	LateDataRules: interface{},
	RetentionPeriod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod,
	Tags: interface{},
	Triggers: interface{},
	VersioningConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions">Actions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules">ContentDeliveryRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName">DatasetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules">LateDataRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers">Triggers</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration">VersioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#actions IotanalyticsDataset#actions}.

---

##### `ContentDeliveryRules`<sup>Optional</sup> <a name="ContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.contentDeliveryRules"></a>

```go
ContentDeliveryRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#content_delivery_rules IotanalyticsDataset#content_delivery_rules}.

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.datasetName"></a>

```go
DatasetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

##### `LateDataRules`<sup>Optional</sup> <a name="LateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.lateDataRules"></a>

```go
LateDataRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#late_data_rules IotanalyticsDataset#late_data_rules}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.retentionPeriod"></a>

```go
RetentionPeriod IotanalyticsDatasetRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod">IotanalyticsDatasetRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#retention_period IotanalyticsDataset#retention_period}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#tags IotanalyticsDataset#tags}.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.triggers"></a>

```go
Triggers interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggers IotanalyticsDataset#triggers}.

---

##### `VersioningConfiguration`<sup>Optional</sup> <a name="VersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetConfig.property.versioningConfiguration"></a>

```go
VersioningConfiguration IotanalyticsDatasetVersioningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration">IotanalyticsDatasetVersioningConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#versioning_configuration IotanalyticsDataset#versioning_configuration}.

---

### IotanalyticsDatasetContentDeliveryRules <a name="IotanalyticsDatasetContentDeliveryRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetContentDeliveryRules {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination,
	EntryName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName">EntryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.destination"></a>

```go
Destination IotanalyticsDatasetContentDeliveryRulesDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#destination IotanalyticsDataset#destination}.

---

##### `EntryName`<sup>Optional</sup> <a name="EntryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRules.property.entryName"></a>

```go
EntryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#entry_name IotanalyticsDataset#entry_name}.

---

### IotanalyticsDatasetContentDeliveryRulesDestination <a name="IotanalyticsDatasetContentDeliveryRulesDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetContentDeliveryRulesDestination {
	IotEventsDestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration,
	S3DestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration">IotEventsDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}. |

---

##### `IotEventsDestinationConfiguration`<sup>Optional</sup> <a name="IotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.iotEventsDestinationConfiguration"></a>

```go
IotEventsDestinationConfiguration IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#iot_events_destination_configuration IotanalyticsDataset#iot_events_destination_configuration}.

---

##### `S3DestinationConfiguration`<sup>Optional</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination.property.s3DestinationConfiguration"></a>

```go
S3DestinationConfiguration IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#s3_destination_configuration IotanalyticsDataset#s3_destination_configuration}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration {
	InputName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName">InputName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `InputName`<sup>Optional</sup> <a name="InputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.inputName"></a>

```go
InputName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#input_name IotanalyticsDataset#input_name}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration {
	Bucket: *string,
	GlueConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration,
	Key: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration">GlueConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#bucket IotanalyticsDataset#bucket}.

---

##### `GlueConfiguration`<sup>Optional</sup> <a name="GlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.glueConfiguration"></a>

```go
GlueConfiguration IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#glue_configuration IotanalyticsDataset#glue_configuration}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#role_arn IotanalyticsDataset#role_arn}.

---

### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration {
	DatabaseName: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#database_name IotanalyticsDataset#database_name}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#table_name IotanalyticsDataset#table_name}.

---

### IotanalyticsDatasetLateDataRules <a name="IotanalyticsDatasetLateDataRules" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetLateDataRules {
	RuleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration,
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration">RuleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}. |

---

##### `RuleConfiguration`<sup>Optional</sup> <a name="RuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleConfiguration"></a>

```go
RuleConfiguration IotanalyticsDatasetLateDataRulesRuleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_configuration IotanalyticsDataset#rule_configuration}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRules.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#rule_name IotanalyticsDataset#rule_name}.

---

### IotanalyticsDatasetLateDataRulesRuleConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetLateDataRulesRuleConfiguration {
	DeltaTimeSessionWindowConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration">DeltaTimeSessionWindowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}. |

---

##### `DeltaTimeSessionWindowConfiguration`<sup>Optional</sup> <a name="DeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration.property.deltaTimeSessionWindowConfiguration"></a>

```go
DeltaTimeSessionWindowConfiguration IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#delta_time_session_window_configuration IotanalyticsDataset#delta_time_session_window_configuration}.

---

### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration {
	TimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}. |

---

##### `TimeoutInMinutes`<sup>Optional</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.property.timeoutInMinutes"></a>

```go
TimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#timeout_in_minutes IotanalyticsDataset#timeout_in_minutes}.

---

### IotanalyticsDatasetRetentionPeriod <a name="IotanalyticsDatasetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetRetentionPeriod {
	NumberOfDays: *f64,
	Unlimited: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays">NumberOfDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `NumberOfDays`<sup>Optional</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.numberOfDays"></a>

```go
NumberOfDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#number_of_days IotanalyticsDataset#number_of_days}.

---

##### `Unlimited`<sup>Optional</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriod.property.unlimited"></a>

```go
Unlimited interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

### IotanalyticsDatasetTags <a name="IotanalyticsDatasetTags" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#key IotanalyticsDataset#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#value IotanalyticsDataset#value}.

---

### IotanalyticsDatasetTriggers <a name="IotanalyticsDatasetTriggers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetTriggers {
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule,
	TriggeringDataset: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset">TriggeringDataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.schedule"></a>

```go
Schedule IotanalyticsDatasetTriggersSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule IotanalyticsDataset#schedule}.

---

##### `TriggeringDataset`<sup>Optional</sup> <a name="TriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggers.property.triggeringDataset"></a>

```go
TriggeringDataset IotanalyticsDatasetTriggersTriggeringDataset
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#triggering_dataset IotanalyticsDataset#triggering_dataset}.

---

### IotanalyticsDatasetTriggersSchedule <a name="IotanalyticsDatasetTriggersSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetTriggersSchedule {
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#schedule_expression IotanalyticsDataset#schedule_expression}.

---

### IotanalyticsDatasetTriggersTriggeringDataset <a name="IotanalyticsDatasetTriggersTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetTriggersTriggeringDataset {
	DatasetName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName">DatasetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}. |

---

##### `DatasetName`<sup>Optional</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset.property.datasetName"></a>

```go
DatasetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#dataset_name IotanalyticsDataset#dataset_name}.

---

### IotanalyticsDatasetVersioningConfiguration <a name="IotanalyticsDatasetVersioningConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

&iotanalyticsdataset.IotanalyticsDatasetVersioningConfiguration {
	MaxVersions: *f64,
	Unlimited: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions">MaxVersions</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}. |

---

##### `MaxVersions`<sup>Optional</sup> <a name="MaxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.maxVersions"></a>

```go
MaxVersions *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#max_versions IotanalyticsDataset#max_versions}.

---

##### `Unlimited`<sup>Optional</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfiguration.property.unlimited"></a>

```go
Unlimited interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotanalytics_dataset#unlimited IotanalyticsDataset#unlimited}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsDatasetActionsContainerActionOutputReference <a name="IotanalyticsDatasetActionsContainerActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsContainerActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration">PutResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration">ResetResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceConfiguration` <a name="PutResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration"></a>

```go
func PutResourceConfiguration(value IotanalyticsDatasetActionsContainerActionResourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putResourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfiguration">IotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables"></a>

```go
func PutVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.putVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetExecutionRoleArn"></a>

```go
func ResetExecutionRoleArn()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetResourceConfiguration` <a name="ResetResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetResourceConfiguration"></a>

```go
func ResetResourceConfiguration()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.resetVariables"></a>

```go
func ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput">ResourceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput">VariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceConfiguration`<sup>Required</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration"></a>

```go
func ResourceConfiguration() IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variables"></a>

```go
func Variables() IotanalyticsDatasetActionsContainerActionVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList">IotanalyticsDatasetActionsContainerActionVariablesList</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationInput`<sup>Optional</sup> <a name="ResourceConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfigurationInput"></a>

```go
func ResourceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.variablesInput"></a>

```go
func VariablesInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference <a name="IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb">ResetVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetComputeType"></a>

```go
func ResetComputeType()
```

##### `ResetVolumeSizeInGb` <a name="ResetVolumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resetVolumeSizeInGb"></a>

```go
func ResetVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput">ComputeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput">VolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType">ComputeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeTypeInput"></a>

```go
func ComputeTypeInput() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbInput`<sup>Optional</sup> <a name="VolumeSizeInGbInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGbInput"></a>

```go
func VolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType"></a>

```go
func ComputeType() *string
```

- *Type:* *string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb"></a>

```go
func VolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName">ResetDatasetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resetDatasetName"></a>

```go
func ResetDatasetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput">DatasetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetNameInput"></a>

```go
func DatasetNameInput() *string
```

- *Type:* *string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsContainerActionVariablesList <a name="IotanalyticsDatasetActionsContainerActionVariablesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetActionsContainerActionVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetActionsContainerActionVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resetFileName"></a>

```go
func ResetFileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileNameInput"></a>

```go
func FileNameInput() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsContainerActionVariablesOutputReference <a name="IotanalyticsDatasetActionsContainerActionVariablesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsContainerActionVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetActionsContainerActionVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue">PutDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue">PutOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue">ResetDatasetContentVersionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue">ResetOutputFileUriValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName">ResetVariableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatasetContentVersionValue` <a name="PutDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue"></a>

```go
func PutDatasetContentVersionValue(value IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putDatasetContentVersionValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---

##### `PutOutputFileUriValue` <a name="PutOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue"></a>

```go
func PutOutputFileUriValue(value IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.putOutputFileUriValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---

##### `ResetDatasetContentVersionValue` <a name="ResetDatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDatasetContentVersionValue"></a>

```go
func ResetDatasetContentVersionValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetOutputFileUriValue` <a name="ResetOutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetOutputFileUriValue"></a>

```go
func ResetOutputFileUriValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```

##### `ResetVariableName` <a name="ResetVariableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.resetVariableName"></a>

```go
func ResetVariableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue">DatasetContentVersionValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue">OutputFileUriValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput">DatasetContentVersionValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput">OutputFileUriValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput">VariableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName">VariableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetContentVersionValue`<sup>Required</sup> <a name="DatasetContentVersionValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue"></a>

```go
func DatasetContentVersionValue() IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a>

---

##### `OutputFileUriValue`<sup>Required</sup> <a name="OutputFileUriValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue"></a>

```go
func OutputFileUriValue() IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">IotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a>

---

##### `DatasetContentVersionValueInput`<sup>Optional</sup> <a name="DatasetContentVersionValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValueInput"></a>

```go
func DatasetContentVersionValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `OutputFileUriValueInput`<sup>Optional</sup> <a name="OutputFileUriValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValueInput"></a>

```go
func OutputFileUriValueInput() interface{}
```

- *Type:* interface{}

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableNameInput"></a>

```go
func VariableNameInput() *string
```

- *Type:* *string

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName"></a>

```go
func VariableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsList <a name="IotanalyticsDatasetActionsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsOutputReference <a name="IotanalyticsDatasetActionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction">PutContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction">PutQueryAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction">ResetContainerAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction">ResetQueryAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerAction` <a name="PutContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction"></a>

```go
func PutContainerAction(value IotanalyticsDatasetActionsContainerAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putContainerAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerAction">IotanalyticsDatasetActionsContainerAction</a>

---

##### `PutQueryAction` <a name="PutQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction"></a>

```go
func PutQueryAction(value IotanalyticsDatasetActionsQueryAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.putQueryAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryAction">IotanalyticsDatasetActionsQueryAction</a>

---

##### `ResetContainerAction` <a name="ResetContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetContainerAction"></a>

```go
func ResetContainerAction()
```

##### `ResetQueryAction` <a name="ResetQueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.resetQueryAction"></a>

```go
func ResetQueryAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction">ContainerAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction">QueryAction</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput">ContainerActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput">QueryActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerAction`<sup>Required</sup> <a name="ContainerAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerAction"></a>

```go
func ContainerAction() IotanalyticsDatasetActionsContainerActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsContainerActionOutputReference">IotanalyticsDatasetActionsContainerActionOutputReference</a>

---

##### `QueryAction`<sup>Required</sup> <a name="QueryAction" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryAction"></a>

```go
func QueryAction() IotanalyticsDatasetActionsQueryActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference">IotanalyticsDatasetActionsQueryActionOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ContainerActionInput`<sup>Optional</sup> <a name="ContainerActionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.containerActionInput"></a>

```go
func ContainerActionInput() interface{}
```

- *Type:* interface{}

---

##### `QueryActionInput`<sup>Optional</sup> <a name="QueryActionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.queryActionInput"></a>

```go
func QueryActionInput() interface{}
```

- *Type:* interface{}

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds">ResetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression">ResetTimeExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffsetSeconds` <a name="ResetOffsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetOffsetSeconds"></a>

```go
func ResetOffsetSeconds()
```

##### `ResetTimeExpression` <a name="ResetTimeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resetTimeExpression"></a>

```go
func ResetTimeExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput">OffsetSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput">TimeExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds">OffsetSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression">TimeExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OffsetSecondsInput`<sup>Optional</sup> <a name="OffsetSecondsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSecondsInput"></a>

```go
func OffsetSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeExpressionInput`<sup>Optional</sup> <a name="TimeExpressionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpressionInput"></a>

```go
func TimeExpressionInput() *string
```

- *Type:* *string

---

##### `OffsetSeconds`<sup>Required</sup> <a name="OffsetSeconds" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds"></a>

```go
func OffsetSeconds() *f64
```

- *Type:* *f64

---

##### `TimeExpression`<sup>Required</sup> <a name="TimeExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression"></a>

```go
func TimeExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsQueryActionFiltersList <a name="IotanalyticsDatasetActionsQueryActionFiltersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsQueryActionFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetActionsQueryActionFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetActionsQueryActionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsQueryActionFiltersOutputReference <a name="IotanalyticsDatasetActionsQueryActionFiltersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsQueryActionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetActionsQueryActionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime">PutDeltaTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime">ResetDeltaTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTime` <a name="PutDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime"></a>

```go
func PutDeltaTime(value IotanalyticsDatasetActionsQueryActionFiltersDeltaTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.putDeltaTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTime">IotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---

##### `ResetDeltaTime` <a name="ResetDeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.resetDeltaTime"></a>

```go
func ResetDeltaTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime">DeltaTime</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput">DeltaTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTime`<sup>Required</sup> <a name="DeltaTime" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime"></a>

```go
func DeltaTime() IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">IotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a>

---

##### `DeltaTimeInput`<sup>Optional</sup> <a name="DeltaTimeInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTimeInput"></a>

```go
func DeltaTimeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetActionsQueryActionOutputReference <a name="IotanalyticsDatasetActionsQueryActionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetActionsQueryActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetActionsQueryActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery">ResetSqlQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetSqlQuery` <a name="ResetSqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.resetSqlQuery"></a>

```go
func ResetSqlQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filters"></a>

```go
func Filters() IotanalyticsDatasetActionsQueryActionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionFiltersList">IotanalyticsDatasetActionsQueryActionFiltersList</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQueryInput"></a>

```go
func SqlQueryInput() *string
```

- *Type:* *string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery"></a>

```go
func SqlQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName">ResetInputName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputName` <a name="ResetInputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetInputName"></a>

```go
func ResetInputName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput">InputNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName">InputName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputNameInput`<sup>Optional</sup> <a name="InputNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputNameInput"></a>

```go
func InputNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName"></a>

```go
func InputName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration">PutIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration">PutS3DestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration">ResetIotEventsDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration">ResetS3DestinationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIotEventsDestinationConfiguration` <a name="PutIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration"></a>

```go
func PutIotEventsDestinationConfiguration(value IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putIotEventsDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---

##### `PutS3DestinationConfiguration` <a name="PutS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration"></a>

```go
func PutS3DestinationConfiguration(value IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.putS3DestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---

##### `ResetIotEventsDestinationConfiguration` <a name="ResetIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetIotEventsDestinationConfiguration"></a>

```go
func ResetIotEventsDestinationConfiguration()
```

##### `ResetS3DestinationConfiguration` <a name="ResetS3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resetS3DestinationConfiguration"></a>

```go
func ResetS3DestinationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration">IotEventsDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput">IotEventsDestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput">S3DestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IotEventsDestinationConfiguration`<sup>Required</sup> <a name="IotEventsDestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration"></a>

```go
func IotEventsDestinationConfiguration() IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a>

---

##### `S3DestinationConfiguration`<sup>Required</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration"></a>

```go
func S3DestinationConfiguration() IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a>

---

##### `IotEventsDestinationConfigurationInput`<sup>Optional</sup> <a name="IotEventsDestinationConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfigurationInput"></a>

```go
func IotEventsDestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3DestinationConfigurationInput`<sup>Optional</sup> <a name="S3DestinationConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfigurationInput"></a>

```go
func S3DestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration">PutGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration">ResetGlueConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueConfiguration` <a name="PutGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration"></a>

```go
func PutGlueConfiguration(value IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.putGlueConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetGlueConfiguration` <a name="ResetGlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetGlueConfiguration"></a>

```go
func ResetGlueConfiguration()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration">GlueConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput">GlueConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueConfiguration`<sup>Required</sup> <a name="GlueConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration"></a>

```go
func GlueConfiguration() IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `GlueConfigurationInput`<sup>Optional</sup> <a name="GlueConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfigurationInput"></a>

```go
func GlueConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesList <a name="IotanalyticsDatasetContentDeliveryRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetContentDeliveryRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetContentDeliveryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetContentDeliveryRulesOutputReference <a name="IotanalyticsDatasetContentDeliveryRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetContentDeliveryRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetContentDeliveryRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName">ResetEntryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination"></a>

```go
func PutDestination(value IotanalyticsDatasetContentDeliveryRulesDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestination">IotanalyticsDatasetContentDeliveryRulesDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetEntryName` <a name="ResetEntryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.resetEntryName"></a>

```go
func ResetEntryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput">EntryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName">EntryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination"></a>

```go
func Destination() IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">IotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `EntryNameInput`<sup>Optional</sup> <a name="EntryNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryNameInput"></a>

```go
func EntryNameInput() *string
```

- *Type:* *string

---

##### `EntryName`<sup>Required</sup> <a name="EntryName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName"></a>

```go
func EntryName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetLateDataRulesList <a name="IotanalyticsDatasetLateDataRulesList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetLateDataRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetLateDataRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetLateDataRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetLateDataRulesOutputReference <a name="IotanalyticsDatasetLateDataRulesOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetLateDataRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetLateDataRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration">PutRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration">ResetRuleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleConfiguration` <a name="PutRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration"></a>

```go
func PutRuleConfiguration(value IotanalyticsDatasetLateDataRulesRuleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.putRuleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfiguration">IotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---

##### `ResetRuleConfiguration` <a name="ResetRuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleConfiguration"></a>

```go
func ResetRuleConfiguration()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration">RuleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput">RuleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleConfiguration`<sup>Required</sup> <a name="RuleConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration"></a>

```go
func RuleConfiguration() IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a>

---

##### `RuleConfigurationInput`<sup>Optional</sup> <a name="RuleConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfigurationInput"></a>

```go
func RuleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes">ResetTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeoutInMinutes` <a name="ResetTimeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resetTimeoutInMinutes"></a>

```go
func ResetTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput">TimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeoutInMinutesInput`<sup>Optional</sup> <a name="TimeoutInMinutesInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```go
func TimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes"></a>

```go
func TimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference <a name="IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration">PutDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration">ResetDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTimeSessionWindowConfiguration` <a name="PutDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration"></a>

```go
func PutDeltaTimeSessionWindowConfiguration(value IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.putDeltaTimeSessionWindowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---

##### `ResetDeltaTimeSessionWindowConfiguration` <a name="ResetDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resetDeltaTimeSessionWindowConfiguration"></a>

```go
func ResetDeltaTimeSessionWindowConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration">DeltaTimeSessionWindowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput">DeltaTimeSessionWindowConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeltaTimeSessionWindowConfiguration`<sup>Required</sup> <a name="DeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration"></a>

```go
func DeltaTimeSessionWindowConfiguration() IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">IotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a>

---

##### `DeltaTimeSessionWindowConfigurationInput`<sup>Optional</sup> <a name="DeltaTimeSessionWindowConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfigurationInput"></a>

```go
func DeltaTimeSessionWindowConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetRetentionPeriodOutputReference <a name="IotanalyticsDatasetRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetRetentionPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetRetentionPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays">ResetNumberOfDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited">ResetUnlimited</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumberOfDays` <a name="ResetNumberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetNumberOfDays"></a>

```go
func ResetNumberOfDays()
```

##### `ResetUnlimited` <a name="ResetUnlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.resetUnlimited"></a>

```go
func ResetUnlimited()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput">NumberOfDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput">UnlimitedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays">NumberOfDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfDaysInput`<sup>Optional</sup> <a name="NumberOfDaysInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```go
func NumberOfDaysInput() *f64
```

- *Type:* *f64

---

##### `UnlimitedInput`<sup>Optional</sup> <a name="UnlimitedInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimitedInput"></a>

```go
func UnlimitedInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfDays`<sup>Required</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays"></a>

```go
func NumberOfDays() *f64
```

- *Type:* *f64

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited"></a>

```go
func Unlimited() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTagsList <a name="IotanalyticsDatasetTagsList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTagsOutputReference <a name="IotanalyticsDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTriggersList <a name="IotanalyticsDatasetTriggersList" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTriggersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotanalyticsDatasetTriggersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get"></a>

```go
func Get(index *f64) IotanalyticsDatasetTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTriggersOutputReference <a name="IotanalyticsDatasetTriggersOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotanalyticsDatasetTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset">PutTriggeringDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset">ResetTriggeringDataset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule"></a>

```go
func PutSchedule(value IotanalyticsDatasetTriggersSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersSchedule">IotanalyticsDatasetTriggersSchedule</a>

---

##### `PutTriggeringDataset` <a name="PutTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset"></a>

```go
func PutTriggeringDataset(value IotanalyticsDatasetTriggersTriggeringDataset)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.putTriggeringDataset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDataset">IotanalyticsDatasetTriggersTriggeringDataset</a>

---

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetTriggeringDataset` <a name="ResetTriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.resetTriggeringDataset"></a>

```go
func ResetTriggeringDataset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset">TriggeringDataset</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput">TriggeringDatasetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.schedule"></a>

```go
func Schedule() IotanalyticsDatasetTriggersScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference">IotanalyticsDatasetTriggersScheduleOutputReference</a>

---

##### `TriggeringDataset`<sup>Required</sup> <a name="TriggeringDataset" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDataset"></a>

```go
func TriggeringDataset() IotanalyticsDatasetTriggersTriggeringDatasetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference">IotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `TriggeringDatasetInput`<sup>Optional</sup> <a name="TriggeringDatasetInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.triggeringDatasetInput"></a>

```go
func TriggeringDatasetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTriggersScheduleOutputReference <a name="IotanalyticsDatasetTriggersScheduleOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTriggersScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetTriggersScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetTriggersTriggeringDatasetOutputReference <a name="IotanalyticsDatasetTriggersTriggeringDatasetOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetTriggersTriggeringDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetTriggersTriggeringDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName">ResetDatasetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetName` <a name="ResetDatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resetDatasetName"></a>

```go
func ResetDatasetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput">DatasetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName">DatasetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetNameInput`<sup>Optional</sup> <a name="DatasetNameInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetNameInput"></a>

```go
func DatasetNameInput() *string
```

- *Type:* *string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName"></a>

```go
func DatasetName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotanalyticsDatasetVersioningConfigurationOutputReference <a name="IotanalyticsDatasetVersioningConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotanalyticsdataset"

iotanalyticsdataset.NewIotanalyticsDatasetVersioningConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotanalyticsDatasetVersioningConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions">ResetMaxVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited">ResetUnlimited</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVersions` <a name="ResetMaxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetMaxVersions"></a>

```go
func ResetMaxVersions()
```

##### `ResetUnlimited` <a name="ResetUnlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.resetUnlimited"></a>

```go
func ResetUnlimited()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput">MaxVersionsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput">UnlimitedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions">MaxVersions</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited">Unlimited</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxVersionsInput`<sup>Optional</sup> <a name="MaxVersionsInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersionsInput"></a>

```go
func MaxVersionsInput() *f64
```

- *Type:* *f64

---

##### `UnlimitedInput`<sup>Optional</sup> <a name="UnlimitedInput" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimitedInput"></a>

```go
func UnlimitedInput() interface{}
```

- *Type:* interface{}

---

##### `MaxVersions`<sup>Required</sup> <a name="MaxVersions" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions"></a>

```go
func MaxVersions() *f64
```

- *Type:* *f64

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited"></a>

```go
func Unlimited() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotanalyticsDataset.IotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



